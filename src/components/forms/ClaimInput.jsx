import { motion } from "framer-motion";
import { useState } from "react";
import { validateClaim } from "../../utils/validators.js";

export function ClaimInput({ onSubmit, loading = false }) {
  const [claim, setClaim] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateClaim(claim);
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    setError("");
    onSubmit(claim);
    setClaim("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-3">
        <div className="relative">
          <motion.textarea
            className="w-full px-4 py-3 rounded-lg glass border border-dark-700/50 focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20 transition-all resize-none min-h-24"
            placeholder="Enter a claim, news headline, or statement to verify..."
            value={claim}
            onChange={(e) => {
              setClaim(e.target.value);
              setError("");
            }}
            disabled={loading}
            whileFocus={{ scale: 1.01 }}
          />

          {/* Character count */}
          <motion.span
            className="absolute bottom-2 right-2 text-xs text-dark-400"
            animate={{ color: claim.length > 400 ? "#ef4444" : "#64748b" }}
          >
            {claim.length}/500
          </motion.span>
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-verdict-fake"
          >
            {error}
          </motion.p>
        )}

        <motion.button
          type="submit"
          disabled={loading || !claim.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {loading ? "Verifying..." : "Verify Claim"}
        </motion.button>
      </div>
    </form>
  );
}
