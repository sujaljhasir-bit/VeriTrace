import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertCircle, Home, ArrowRight } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 pt-20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          className="mb-6 inline-block"
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AlertCircle size={80} className="text-verdict-misleading" />
        </motion.div>

        <h1 className="text-6xl font-bold mb-3">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>

        <p className="text-dark-400 text-lg mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. Let's get you
          back on track.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          asChild
        >
          <Link
            to="/"
            className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 inline-flex items-center gap-2"
          >
            <Home size={18} />
            Back Home
            <ArrowRight size={18} />
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
}
