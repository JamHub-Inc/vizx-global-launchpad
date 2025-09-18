import React, { useState, useEffect } from "react";
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
import { useChat } from "@/components/chatContext";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY as string;

// 👇 Add this to silence the red underline without separate zoho.d.ts
declare global {
  interface Window {
    $zoho: any;
  }
}

type ChatMessage = {
  message: string;
  sender: "ChatGPT" | "user" | "agent" | "system";
  direction: "incoming" | "outgoing";
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
    },
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [mode, setMode] = useState<"ai" | "agent">("ai");
  const location = useLocation();
  const { originalTweet } = (location.state as { originalTweet?: string }) || {};

  // Attach Zoho listener once for agent replies
  useEffect(() => {
    if (window.$zoho && window.$zoho.salesiq) {
      window.$zoho.salesiq.ready = function () {
        window.$zoho.salesiq.chat.onMessage((data: any) => {
          setMessages((prev) => [
            ...prev,
            {
              message: data.text,
              sender: "agent",
              direction: "incoming",
            },
          ]);
        });
      };
    }
  }, []);

  useEffect(() => {
    if (originalTweet) {
      const newMessage: ChatMessage = {
        message: originalTweet,
        sender: "user",
        direction: "outgoing",
      };
      setMessages((prev) => [...prev, newMessage]);
      if (mode === "ai") {
        setIsTyping(true);
        processMessageToChatGPT([...messages, newMessage]);
      } else {
        sendToZoho(originalTweet);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalTweet]);

  const handleSend = async (messageText: string) => {
    const newMessage: ChatMessage = {
      message: messageText,
      sender: "user",
      direction: "outgoing",
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
    if (window.$zoho && window.$zoho.salesiq) {
      window.$zoho.salesiq.visitor.chat.sendMessage(text);
    }
    setMessages((prev) => [
      ...prev,
      {
        message: "📨 Sent to human agent...",
        sender: "system",
        direction: "incoming",
      },
    ]);
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

      const data = await response.json();
      if (data.error) {
        console.error("OpenAI API Error:", data.error.message);
        return;
      }

      const reply = data.choices[0].message.content;
      setMessages((prev) => [
        ...prev,
        {
          message: reply,
          sender: "ChatGPT",
          direction: "incoming",
        },
      ]);
    } catch (err) {
      console.error("Network error:", err);
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
          message: "🔔 You are now connected with a real Vizx Global human agent.",
          sender: "system",
          direction: "incoming",
        },
      ]);
    } else {
      setMode("ai");
      setMessages((prev) => [
        ...prev,
        {
          message: "🤖 You are now back with the Vizx Global AI Assistant.",
          sender: "system",
          direction: "incoming",
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
            {messages.map((msg, idx) => (
              <Message
                key={idx}
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
                : "You are now chatting with a real agent..."
            }
            onSend={handleSend}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatbotWindow;
