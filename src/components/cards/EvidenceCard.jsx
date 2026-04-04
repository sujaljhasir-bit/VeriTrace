import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, TrendingDown } from "lucide-react";
import { formatUrl, truncateText } from "../../utils/formatters.js";

export function EvidenceCard({ evidence, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-4 rounded-lg glass border border-dark-700/50 hover:border-accent-cyan/50 transition-all hover:shadow-glow-cyan group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold leading-tight line-clamp-2">
            {evidence.title}
          </h4>
          <p className="text-xs text-dark-400 mt-1">
            {formatUrl(evidence.url)}
          </p>
        </div>
        <motion.a
          href={evidence.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 hover:bg-dark-800 rounded-lg transition-colors flex-shrink-0"
        >
          <ExternalLink size={16} className="text-accent-cyan" />
        </motion.a>
      </div>

      {/* Excerpt */}
      <p className="text-sm text-dark-300 mb-3 line-clamp-3">
        {truncateText(evidence.excerpt, 120)}
      </p>

      {/* Footer with Credibility Scores */}
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-dark-400">Relevance</span>
              <span className="text-accent-cyan font-semibold">
                {Math.round(evidence.relevance * 100)}%
              </span>
            </div>
            <div className="w-12 h-1.5 bg-dark-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                initial={{ width: 0 }}
                whileInView={{ width: `${evidence.relevance * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-dark-400">Credibility</span>
              <span className="text-verdict-real font-semibold">
                {Math.round(evidence.credibility * 100)}%
              </span>
            </div>
            <div className="w-12 h-1.5 bg-dark-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-verdict-real"
                initial={{ width: 0 }}
                whileInView={{ width: `${evidence.credibility * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
