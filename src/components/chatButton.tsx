import { Bot } from "lucide-react";
import { useChat } from "@/components/ChatContext";

const ChatButton: React.FC = () => {
  const { toggleChat } = useChat();

  return (
    <div className="fixed bottom-8 right-8 flex items-center z-[9998]">
      <button
        onClick={toggleChat}
        className="group relative flex items-center hover:bg-orange-600"
        style={{
          backgroundColor: "#ff7700",
          borderRadius: "50%",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Bot size={24} className="text-white" />
        <span
          className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-full mr-2 whitespace-nowrap bg-white text-gray-800 px-3 py-1 rounded shadow-lg text-sm pointer-events-none"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          AI Assistant
        </span>
      </button>
    </div>
  );
};

export default ChatButton;
