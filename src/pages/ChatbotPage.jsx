import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { ChatBubble } from "../components/chatbot/ChatBubble.jsx";
import { ChatInput } from "../components/chatbot/ChatInput.jsx";
import { SuggestedPrompts } from "../components/chatbot/SuggestedPrompts.jsx";
import { ChatHistory } from "../components/chatbot/ChatHistory.jsx";
import { chatbotService } from "../services/chatbotService.js";
import { MOCK_CHAT_HISTORY } from "../utils/mockData.js";

export function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm SETU, your AI assistant. I'm here to help you understand fake news, verify claims, and spot misinformation. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [suggestedPrompts, setSuggestedPrompts] = useState([]);
  const [chatHistory, setChatHistory] = useState(MOCK_CHAT_HISTORY);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    loadSuggestedPrompts();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadSuggestedPrompts = async () => {
    try {
      const prompts = await chatbotService.getSuggestedPrompts();
      setSuggestedPrompts(prompts);
    } catch (error) {
      console.error("Error loading suggested prompts:", error);
    }
  };

  const handleSendMessage = async (text) => {
    // Add user message
    const userMessage = {
      id: Date.now(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      // Mock API call - replace with actual service when backend is ready
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const responses = [
            "That's a great question! Misinformation can spread quickly. One way to verify claims is to check multiple credible sources and look for corroborating evidence.",
            "Deep fakes are AI-generated videos or images that can look convincing but are fabricated. Always verify sources and use tools specifically designed to detect deep fakes.",
            "When evaluating news sources, check the author's credentials, verify the facts with multiple sources, and look for any obvious bias or sensationalism in the language used.",
            "Red flags for misinformation include: lack of author information, sensational headlines, missing dates, one-sided arguments, and images without context.",
            "VeriTrace can help you verify claims by searching through millions of trusted sources and providing evidence-based verdicts with confidence scores.",
          ];
          resolve(responses[Math.floor(Math.random() * responses.length)]);
        }, 1500);
      });

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I encountered an error. Please try again.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectChat = (chatId) => {
    // Reset messages or load specific chat
    setMessages([
      {
        id: 1,
        text: "Chat history loaded. How can I help you?",
        isBot: true,
        timestamp: new Date(),
      },
    ]);
  };

  const handleDeleteChat = (chatId) => {
    setChatHistory((prev) => prev.filter((chat) => chat.id !== chatId));
  };

  return (
    <div className="h-screen bg-dark-900 flex overflow-hidden pt-16">
      {/* Sidebar */}
      <motion.div
        className={`fixed md:relative w-64 h-[calc(100vh-4rem)] bg-dark-900/95 border-r border-dark-700/50 z-30 md:z-auto ${
          sidebarOpen ? "left-0" : "-left-full"
        } md:left-0 transition-all duration-300`}
      >
        <ChatHistory
          chats={chatHistory}
          onSelectChat={handleSelectChat}
          onDeleteChat={handleDeleteChat}
          activeId={null}
        />
      </motion.div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          className="h-16 border-b border-dark-700/50 flex items-center justify-between px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-dark-800 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <MessageCircle size={20} className="text-accent-cyan" />
            <h1 className="text-lg font-semibold">SETU Assistant</h1>
          </div>

          <motion.div
            className="text-sm text-dark-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {loading ? "Typing..." : "Online"}
          </motion.div>
        </motion.div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              message={message.text}
              isBot={message.isBot}
              timestamp={message.timestamp}
            />
          ))}

          {/* Suggested Prompts - Show only if no meaningful conversation */}
          {messages.length === 1 && suggestedPrompts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <p className="text-sm text-dark-400 mb-3">Suggested prompts:</p>
              <SuggestedPrompts
                prompts={suggestedPrompts}
                onPromptClick={handleSendMessage}
                loading={loading}
              />
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <ChatInput onSubmit={handleSendMessage} loading={loading} />
      </div>
    </div>
  );
}
