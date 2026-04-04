import { motion } from "framer-motion";

export function SuggestedPrompts({ prompts, onPromptClick, loading }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      {prompts?.map((prompt, index) => (
        <motion.button
          key={index}
          onClick={() => onPromptClick(prompt)}
          disabled={loading}
          className="p-3 rounded-lg glass border border-dark-700/50 hover:border-accent-cyan/50 text-left text-sm hover:bg-dark-800/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <p className="line-clamp-2">{prompt}</p>
        </motion.button>
      ))}
    </motion.div>
  );
}
