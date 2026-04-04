import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useToast } from "../../hooks/useToast.js";

export function Toast({ id, message, type, removeToast }) {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} className="text-verdict-real" />;
      case "error":
        return <AlertCircle size={20} className="text-verdict-fake" />;
      case "info":
        return <Info size={20} className="text-accent-cyan" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 400 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, x: 400 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg glass border ${
        type === "success"
          ? "border-verdict-real/30 bg-verdict-real/10"
          : type === "error"
            ? "border-verdict-fake/30 bg-verdict-fake/10"
            : "border-accent-cyan/30 bg-accent-cyan/10"
      }`}
    >
      {getIcon()}
      <span className="flex-1 text-sm">{message}</span>
      <button
        onClick={() => removeToast(id)}
        className="p-1 hover:bg-dark-700 rounded transition-colors"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}

export function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full px-4 md:px-0">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            removeToast={removeToast}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
