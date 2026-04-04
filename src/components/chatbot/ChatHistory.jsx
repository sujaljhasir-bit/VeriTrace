import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

export function ChatHistory({ chats, onSelectChat, onDeleteChat, activeId }) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-dark-700/50">
        <h3 className="font-semibold text-sm">Chat History</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {chats?.length === 0 ? (
          <p className="text-sm text-dark-400 text-center py-8">
            No conversations yet
          </p>
        ) : (
          chats?.map((chat) => (
            <motion.button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`w-full text-left p-3 rounded-lg mb-2 group transition-all ${
                activeId === chat.id
                  ? "bg-dark-700/50 border border-accent-cyan/50"
                  : "hover:bg-dark-800/30 border border-transparent"
              }`}
              whileHover={{ x: 5 }}
            >
              <p className="text-sm font-medium line-clamp-1">{chat.title}</p>
              <p className="text-xs text-dark-400 mt-1">
                {new Date(chat.timestamp).toLocaleDateString()}
              </p>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteChat(chat.id);
                }}
                className="mt-2 p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-dark-600 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Trash2
                  size={14}
                  className="text-dark-400 hover:text-verdict-fake"
                />
              </motion.button>
            </motion.button>
          ))
        )}
      </div>
    </div>
  );
}
