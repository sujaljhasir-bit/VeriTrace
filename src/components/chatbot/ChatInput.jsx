import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { PulseLoader } from "../loaders/PulseLoader.jsx";

export function ChatInput({ onSubmit, loading = false }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-dark-700/50">
      <div className="flex gap-2">
        <motion.input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
          className="flex-1 px-4 py-2 rounded-lg glass border border-dark-700/50 focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20 transition-all"
          whileFocus={{ scale: 1.01 }}
        />
        <motion.button
          type="submit"
          disabled={loading || !message.trim()}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? <PulseLoader /> : <Send size={18} />}
        </motion.button>
      </div>
    </form>
  );
}
