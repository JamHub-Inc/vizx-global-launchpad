import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  MessageModel,
} from "@chatscope/chat-ui-kit-react";
import { AiOutlineClose } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BsRobot } from "react-icons/bs";
import { useChat } from "@/components/ChatContext";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY as string;

declare global {
  interface Window {
    $zoho: any;
    ZOHO: any;
  }
}

type ChatMessage = {
  message: string;
  sender: "ChatGPT" | "user" | "agent" | "system";
  direction: "incoming" | "outgoing";
  timestamp: number;
  id: string;
};

const systemMessage = {
  role: "system",
  content: `
    You are Vizx Global's AI Assistant.
    - Always answer as a representative of Vizx Global.
    - Vizx Global is a BPO and RPO company headquartered in Kenya with US partnerships.
    - We specialize in technology, finance, real estate, healthcare, and outsourcing.
    - We provide cost-effective recruitment, customer support, and digital workflow automation.
    - Speak in a professional, clear, supportive tone.
  `,
};

const ChatbotWindow: React.FC = () => {
  const { isOpen, closeChat } = useChat();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello, Welcome to Vizx Global AI Assistant Support!",
      sender: "ChatGPT",
      direction: "incoming",
      timestamp: Date.now(),
      id: `msg-${Date.now()}-0`,
    },
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [mode, setMode] = useState<"ai" | "agent">("ai");
  const [isZohoReady, setIsZohoReady] = useState<boolean>(false);
  const location = useLocation();
  const { originalTweet } = (location.state as { originalTweet?: string }) || {};
  const zohoCheckInterval = useRef<NodeJS.Timeout | null>(null);

  // Enhanced Zoho readiness check
  useEffect(() => {
    const checkZohoReady = () => {
      const zoho = window.$zoho || window.ZOHO;
      
      if (zoho && zoho.salesiq) {
        // Check if any chat-related methods exist
        const hasChatMethods = 
          (zoho.salesiq.visitor && 
           (zoho.salesiq.visitor.chat || 
            zoho.salesiq.visitor.offlineMessage ||
            zoho.salesiq.visitor.chatmessage)) ||
          (zoho.salesiq.chat);
        
        if (hasChatMethods) {
          setIsZohoReady(true);
          if (zohoCheckInterval.current) {
            clearInterval(zohoCheckInterval.current);
            zohoCheckInterval.current = null;
          }
          return true;
        }
      }
      return false;
    };

    // Initial check
    if (checkZohoReady()) return;

    // Set up interval to check for Zoho
    zohoCheckInterval.current = setInterval(checkZohoReady, 1000);

    // Cleanup
    return () => {
      if (zohoCheckInterval.current) {
        clearInterval(zohoCheckInterval.current);
      }
    };
  }, []);

  // Listen for Zoho's own ready event
  useEffect(() => {
    const handleZohoReady = () => {
      console.log("Zoho SalesIQ is ready");
      setIsZohoReady(true);
    };

    // Listen for Zoho's built-in ready event
    if (window.$zoho && window.$zoho.salesiq && window.$zoho.salesiq.ready) {
      const originalReady = window.$zoho.salesiq.ready;
      window.$zoho.salesiq.ready = function() {
        if (typeof originalReady === 'function') {
          originalReady.call(this);
        }
        handleZohoReady();
      };
    }

    // Also check if Zoho is already ready
    if (window.$zoho && window.$zoho.salesiq && window.$zoho.salesiq.visitor) {
      handleZohoReady();
    }
  }, []);

  // Handle original tweet from location state
  useEffect(() => {
    if (originalTweet) {
      const newMessage: ChatMessage = {
        message: originalTweet,
        sender: "user",
        direction: "outgoing",
        timestamp: Date.now(),
        id: `msg-${Date.now()}-user`,
      };
      setMessages((prev) => [...prev, newMessage]);
      
      if (mode === "ai") {
        setIsTyping(true);
        processMessageToChatGPT([...messages, newMessage]);
      } else {
        sendToZoho(originalTweet);
      }
    }
  }, [originalTweet, mode]);

  const handleSend = async (messageText: string) => {
    const newMessage: ChatMessage = {
      message: messageText,
      sender: "user",
      direction: "outgoing",
      timestamp: Date.now(),
      id: `msg-${Date.now()}-user`,
    };
    setMessages((prev) => [...prev, newMessage]);

    if (mode === "ai") {
      setIsTyping(true);
      await processMessageToChatGPT([...messages, newMessage]);
    } else {
      sendToZoho(messageText);
    }
  };

  const sendToZoho = (text: string) => {
    if (!isZohoReady) {
      setMessages((prev) => [
        ...prev,
        {
          message: "Agent service is still connecting. Please try again in a moment.",
          sender: "system",
          direction: "incoming",
          timestamp: Date.now(),
          id: `msg-${Date.now()}-system`,
        },
      ]);
      return;
    }

    try {
      const zoho = window.$zoho || window.ZOHO;
      let messageSent = false;

      // Try the correct Zoho API methods based on debug output
      if (zoho && zoho.salesiq && zoho.salesiq.visitor) {
        // Method 1: chatmessage (most likely for sending messages)
        if (zoho.salesiq.visitor.chatmessage && typeof zoho.salesiq.visitor.chatmessage === 'function') {
          zoho.salesiq.visitor.chatmessage(text);
          messageSent = true;
          // console.log("Message sent via visitor.chatmessage");
        }
        // Method 2: offlineMessage (for when agents are offline)
        else if (zoho.salesiq.visitor.offlineMessage && typeof zoho.salesiq.visitor.offlineMessage === 'function') {
          zoho.salesiq.visitor.offlineMessage(text);
          messageSent = true;
          // console.log("Message sent via visitor.offlineMessage");
        }
        // Method 3: Try to start a chat and then send message
        else if (zoho.salesiq.visitor.chat && typeof zoho.salesiq.visitor.chat === 'function') {
          // This might be for initiating a chat session
          zoho.salesiq.visitor.chat(text);
          messageSent = true;
          // console.log("Chat initiated via visitor.chat");
        }
        // Method 4: Use the chat object's methods
        else if (zoho.salesiq.chat && zoho.salesiq.chat.start && typeof zoho.salesiq.chat.start === 'function') {
          // Start a chat session first
          zoho.salesiq.chat.start();
          // Then try to send message if there's a send method
          if (zoho.salesiq.visitor.chatmessage && typeof zoho.salesiq.visitor.chatmessage === 'function') {
            zoho.salesiq.visitor.chatmessage(text);
          }
          messageSent = true;
          // console.log("Chat started and message sent");
        }
      }

      if (messageSent) {
        setMessages((prev) => [
          ...prev,
          {
            message: "Message sent to Vizx Help Desk. You'll get respond shortly...",
            sender: "system",
            direction: "incoming",
            timestamp: Date.now(),
            id: `msg-${Date.now()}-system`,
          }
        ]);
        
        // Try to ensure the chat window is open
        openZohoChatWindow();
      } else {
        throw new Error("Could not send message to Zoho agent");
      }
    } catch (error) {
      console.error("Error sending to Zoho:", error);
      setMessages((prev) => [
        ...prev,
        {
          message: "Failed to send message to agent. Please try switching back to AI mode.",
          sender: "system",
          direction: "incoming",
          timestamp: Date.now(),
          id: `msg-${Date.now()}-system`,
        },
      ]);
    }
  };

  const openZohoChatWindow = () => {
    try {
      const zoho = window.$zoho || window.ZOHO;
      if (zoho && zoho.salesiq) {
        // Try to open the chat window
        if (zoho.salesiq.chatwindow && zoho.salesiq.chatwindow.open && typeof zoho.salesiq.chatwindow.open === 'function') {
          zoho.salesiq.chatwindow.open();
          // console.log("Zoho chat window opened");
        }
        // Alternative method to show chat window
        else if (zoho.salesiq.floatwindow && zoho.salesiq.floatwindow.show && typeof zoho.salesiq.floatwindow.show === 'function') {
          zoho.salesiq.floatwindow.show();
          // console.log("Zoho float window shown");
        }
      }
    } catch (error) {
      console.warn("Could not open Zoho chat window:", error);
    }
  };

  const startZohoChat = () => {
    try {
      const zoho = window.$zoho || window.ZOHO;
      if (zoho && zoho.salesiq) {
        // Try to start a chat session
        if (zoho.salesiq.chat && zoho.salesiq.chat.start && typeof zoho.salesiq.chat.start === 'function') {
          zoho.salesiq.chat.start();
          // console.log("Zoho chat session started");
        }
        // Alternative method using visitor.chat
        else if (zoho.salesiq.visitor && zoho.salesiq.visitor.chat && typeof zoho.salesiq.visitor.chat === 'function') {
          zoho.salesiq.visitor.chat();
          // console.log("Zoho visitor chat initiated");
        }
      }
    } catch (error) {
      console.warn("Could not start Zoho chat:", error);
    }
  };

  const processMessageToChatGPT = async (chatMessages: ChatMessage[]) => {
    const apiMessages = chatMessages.map((msg) => ({
      role: msg.sender === "ChatGPT" ? "assistant" : "user",
      content: msg.message,
    }));

    const requestBody = {
      model: "gpt-4",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        console.error("OpenAI API Error:", data.error.message);
        setMessages((prev) => [
          ...prev,
          {
            message: "Sorry, I'm experiencing technical difficulties. Please try again later.",
            sender: "system",
            direction: "incoming",
            timestamp: Date.now(),
            id: `msg-${Date.now()}-system`,
          },
        ]);
        return;
      }

      const reply = data.choices[0].message.content;
      setMessages((prev) => [
        ...prev,
        {
          message: reply,
          sender: "ChatGPT",
          direction: "incoming",
          timestamp: Date.now(),
          id: `msg-${Date.now()}-ai`,
        },
      ]);
    } catch (err) {
      console.error("Network error:", err);
      setMessages((prev) => [
        ...prev,
        {
          message: "Sorry, I'm having trouble connecting. Please try again.",
          sender: "system",
          direction: "incoming",
          timestamp: Date.now(),
          id: `msg-${Date.now()}-system`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleModeSwitch = () => {
    if (mode === "ai") {
      setMode("agent");
      setMessages((prev) => [
        ...prev,
        {
          message: "You're Connected to Vizx Helpline. Please how may we help you?",
          sender: "system",
          direction: "incoming",
          timestamp: Date.now(),
          id: `msg-${Date.now()}-system`,
        },
      ]);
      
      // Try to start a chat with agent if Zoho is ready
      if (isZohoReady) {
        startZohoChat();
        openZohoChatWindow();
      }
    } else {
      setMode("ai");
      setMessages((prev) => [
        ...prev,
        {
          message: "🤖 You are now back with the Vizx Global AI Assistant.",
          sender: "system",
          direction: "incoming",
          timestamp: Date.now(),
          id: `msg-${Date.now()}-system`,
        },
      ]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-8 w-[380px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-[#ff7700]">
      {/* Header */}
      <div className="flex justify-between items-center p-2 bg-[#fff5eb]">
        <button
          onClick={closeChat}
          className="text-gray-500 hover:text-[#ff7700] transition-colors"
        >
          <AiOutlineClose size={20} />
        </button>
        <button
          onClick={handleModeSwitch}
          className="flex items-center gap-1 text-sm text-[#ff7700] font-semibold hover:underline"
          disabled={mode === "agent" && !isZohoReady}
        >
          {mode === "ai" ? (
            <>
              <HiUserGroup size={18} /> Talk to a Real Agent
            </>
          ) : (
            <>
              <BsRobot size={16} /> Back to AI Assistant
            </>
          )}
        </button>
      </div>

      {/* Connection status indicator */}
      {mode === "agent" && (
        <div className={`px-2 py-1 text-xs text-center ${isZohoReady ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {isZohoReady ? '✅ Connected to agent service' : '⏳ Connecting to agent service...'}
        </div>
      )}

      {/* Unified Chat */}
      <MainContainer className="py-12">
        <ChatContainer>
          <MessageList
            typingIndicator={
              mode === "ai" && isTyping ? (
                <TypingIndicator content="Assistant is answering..." />
              ) : null
            }
          >
            {messages.map((msg) => (
              <Message
                key={msg.id}
                model={{
                  message: msg.message,
                  sender: msg.sender,
                  direction: msg.direction,
                  position: "single",
                } as MessageModel}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder={
              mode === "ai"
                ? "Type your message here..."
                : isZohoReady 
                  ? "You are now connected with a real agent..."
                  : "Connecting to agent service..."
            }
            onSend={handleSend}
            disabled={mode === "agent" && !isZohoReady}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatbotWindow;