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

// Simple environment variable handling for Vite
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY as string;
const IS_DEVELOPMENT = import.meta.env.DEV;

// Debug logging
console.log('Environment Variables Status:');
console.log('IS_DEVELOPMENT:', IS_DEVELOPMENT);
console.log('API_KEY exists:', !!API_KEY);
console.log('VITE_OPENAI_API_KEY exists:', !!import.meta.env.VITE_OPENAI_API_KEY);

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
  - Always answer as a representative of Vizx Global Solutions.
  - Vizx Global is a premier BPO (Business Process Outsourcing) and RPO (Recruitment Process Outsourcing) company.
  - Headquartered in Nairobi, Kenya, with a strategic office in Los Angeles, California.
  - Established in 2017 as Vizx International; rebranded as Vizx Global Solutions.
  - Began with 100+ seats serving U.S. clients; now 400+ seats at Britam Towers, scalable to 600+.
  - Our leadership brings over 25 years of experience in outsourcing, healthcare staffing, and offshore workforce solutions.
  - CEO: John Mamboleo, an entrepreneur with U.S. healthcare staffing background.
  - Owner-driven model: leadership is hands-on with daily operations and client relations.
  - Core philosophy: "Vision Execution (VIZX)" — turning ideas into measurable outcomes.
  - Specializations include:
    • Recruitment Process Outsourcing (RPO)
    • Back-office and administrative support
    • Customer Experience (CX) and call center support
    • Digital workflow automation
    • Finance and accounting services
    • Data services and analytics
    • Sales enablement and lead generation
    • Healthcare staffing and outsourcing
    • Real estate business support
    • Digital marketing and brand outreach
  - Vizx Global champions Kenya as a premier outsourcing hub.
  - Kenya advantages: 83% literacy, 75%+ with high school/college education, stable internet, strong infrastructure.
  - Clients are mainly U.S.-based with combined revenues over $1B.
  - Our services reduce overhead, improve efficiency, and allow clients to focus on their core operations.
  - Vizx Global builds jobs for African youth and professionals, advancing equity and opportunity.
  - We emphasize scalability, rapid ramp-up, and multilingual support for global markets.
  - We operate transparently, guided by ethics: fair wages, inclusivity, equity, and transparency.
  - Vizx Global is independent from Vizx Corporate (vizxcorp.com).
  - Vizx Corporate is led by Dorika Mamboleo Beckett, focused on incubation and venture building.
  - Relationship with Vizx Corporate: shared "Vision Execution" philosophy and familial leadership link, not a parent-subsidiary structure.
  - Vizx Global is NOT affiliated with VXI Global Solutions (vxi.com).
  - VXI was founded in 1998, acquired by Bain Capital in 2022, with a separate leadership team.
  - Negative VXI reviews and financials do not apply to Vizx Global.
  - Vizx Global's reputation is positive, with strong client testimonials highlighting efficiency and cost savings.
  - Differentiation: African cost efficiency + Western service quality.
  - Partnerships with U.S. firms strengthen credibility and trust.
  - Vizx Global uses AI, automation, and cloud tools for digital transformation.
  - Clients span industries: technology, finance, healthcare, and real estate.
  - Vision: transform outsourcing through innovation, efficiency, and global talent.
  - Mission: deliver scalable, affordable, and high-quality outsourcing solutions.
  - Value proposition: mobilizing Africa's educated workforce to serve global businesses.
  - Service delivery blends human expertise with digital automation for maximum impact.
  - Competitive edge: agile scaling, owner-driven model, and direct leadership oversight.
  - Training and development programs prepare Kenyan graduates for global careers.
  - We foster long-term client partnerships instead of one-time transactions.
  - Commitment to job creation and socio-economic growth in Kenya and Africa.
  - Positioning: pioneer of African outsourcing industry, helping shift global perceptions.
  - Shared entrepreneurial legacy of Dorika and John Mamboleo reinforces brand credibility.
  - Vizx Global nurtures innovation and entrepreneurship within its ecosystem.
  - Future plans: expand seat capacity, add regional African centers, strengthen U.S. footprint.
  - Speak in a professional, clear, and supportive tone, positioning Vizx Global as a trusted, innovative outsourcing partner.
`
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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const location = useLocation();
  const { originalTweet } = (location.state as { originalTweet?: string }) || {};
  const zohoCheckInterval = useRef<NodeJS.Timeout | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Enhanced Zoho readiness check
  useEffect(() => {
    const checkZohoReady = () => {
      const zoho = window.$zoho || window.ZOHO;
      
      if (zoho && zoho.salesiq) {
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

    if (checkZohoReady()) return;

    zohoCheckInterval.current = setInterval(checkZohoReady, 1000);

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

    if (window.$zoho && window.$zoho.salesiq && window.$zoho.salesiq.ready) {
      const originalReady = window.$zoho.salesiq.ready;
      window.$zoho.salesiq.ready = function() {
        if (typeof originalReady === 'function') {
          originalReady.call(this);
        }
        handleZohoReady();
      };
    }

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

      if (zoho && zoho.salesiq && zoho.salesiq.visitor) {
        if (zoho.salesiq.visitor.chatmessage && typeof zoho.salesiq.visitor.chatmessage === 'function') {
          zoho.salesiq.visitor.chatmessage(text);
          messageSent = true;
        }
        else if (zoho.salesiq.visitor.offlineMessage && typeof zoho.salesiq.visitor.offlineMessage === 'function') {
          zoho.salesiq.visitor.offlineMessage(text);
          messageSent = true;
        }
        else if (zoho.salesiq.visitor.chat && typeof zoho.salesiq.visitor.chat === 'function') {
          zoho.salesiq.visitor.chat(text);
          messageSent = true;
        }
        else if (zoho.salesiq.chat && zoho.salesiq.chat.start && typeof zoho.salesiq.chat.start === 'function') {
          zoho.salesiq.chat.start();
          if (zoho.salesiq.visitor.chatmessage && typeof zoho.salesiq.visitor.chatmessage === 'function') {
            zoho.salesiq.visitor.chatmessage(text);
          }
          messageSent = true;
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
        if (zoho.salesiq.chatwindow && zoho.salesiq.chatwindow.open && typeof zoho.salesiq.chatwindow.open === 'function') {
          zoho.salesiq.chatwindow.open();
        }
        else if (zoho.salesiq.floatwindow && zoho.salesiq.floatwindow.show && typeof zoho.salesiq.floatwindow.show === 'function') {
          zoho.salesiq.floatwindow.show();
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
        if (zoho.salesiq.chat && zoho.salesiq.chat.start && typeof zoho.salesiq.chat.start === 'function') {
          zoho.salesiq.chat.start();
        }
        else if (zoho.salesiq.visitor && zoho.salesiq.visitor.chat && typeof zoho.salesiq.visitor.chat === 'function') {
          zoho.salesiq.visitor.chat();
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
    console.log("Environment:", IS_DEVELOPMENT ? "Development" : "Production");
    
    let response;
    
    if (IS_DEVELOPMENT) {
      // Development: Use direct OpenAI API
      console.log("Using direct OpenAI API (development mode)");
      response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
    } else {
      // Production: Use Vercel API with fallback
      console.log("Using Vercel API route (production mode)");
      
      // Try absolute URL first
      const apiUrl = "https://vizx-global-launchpad.vercel.app/api/chat";
      response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      // If 401, try direct API as fallback (temporary)
      if (response.status === 401) {
        console.log("Vercel API returned 401, trying direct API as fallback");
        response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
      }
    }

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`HTTP error! status: ${response.status}`, errorText);
      
      if (response.status === 401) {
        throw new Error("Authentication failed. Please check if the API key is configured correctly on the server.");
      }
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message || "API returned an error");
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
  } catch (err: any) {
    console.error("ChatGPT error:", err);
    setMessages((prev) => [
      ...prev,
      {
        message: `I apologize, but I'm experiencing technical difficulties. ${err.message}`,
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
    <div 
      ref={chatContainerRef}
      className={`
        fixed z-50 bg-white rounded-lg shadow-lg overflow-hidden border border-[#ff7700]
        ${isMobile 
          ? 'bottom-0 left-0 right-0 top-auto w-full h-[70vh] max-h-[600px] rounded-b-none' 
          : 'bottom-20 right-8 w-[380px] h-[500px] max-w-[95vw]'
        }
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-3 bg-[#fff5eb]">
        <button
          onClick={closeChat}
          className="text-gray-500 hover:text-[#ff7700] transition-colors"
          aria-label="Close chat"
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
              <HiUserGroup size={18} /> 
              <span className={isMobile ? "hidden sm:inline" : ""}>Talk to a Real Agent</span>
              <span className={isMobile ? "sm:hidden" : "hidden"}>Vizx Agent</span>
            </>
          ) : (
            <>
              <BsRobot size={16} /> 
              <span className={isMobile ? "hidden sm:inline" : ""}>Back to AI Assistant</span>
              <span className={isMobile ? "sm:hidden" : "hidden"}>Vizx AI Assistant</span>
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
      <MainContainer className={isMobile ? "h-[calc(100%-80px)]" : "py-12"}>
        <ChatContainer>
          <MessageList
            typingIndicator={
              mode === "ai" && isTyping ? (
                <TypingIndicator content="Assistant is answering..." />
              ) : null
            }
            className={isMobile ? "px-2" : ""}
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
            className={isMobile ? "px-2" : ""}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatbotWindow;