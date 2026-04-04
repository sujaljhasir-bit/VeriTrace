import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function ChatBubble({ message, isBot, timestamp }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}
    >
      <motion.div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg group ${
          isBot
            ? "glass border border-dark-700/50 bg-dark-800/40"
            : "bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900"
        }`}
        whileHover={{ scale: 1.02 }}
      >
        <p className="text-sm leading-relaxed">{message}</p>

        {/* Copy button for bot messages */}
        {isBot && (
          <motion.button
            onClick={handleCopy}
            className="mt-2 text-xs text-dark-400 hover:text-accent-cyan transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {copied ? (
              <>
                <Check size={14} /> Copied
              </>
            ) : (
              <>
                <Copy size={14} /> Copy
              </>
            )}
          </motion.button>
        )}

        {timestamp && (
          <p className="text-xs text-dark-500 mt-2">
            {new Date(timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
