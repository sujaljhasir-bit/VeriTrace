import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, History, Filter, Download } from "lucide-react";
import { ClaimInput } from "../components/forms/ClaimInput";
import { EvidenceCard } from "../components/cards/EvidenceCard.jsx";
import { ConfidenceGauge } from "../components/charts/ConfidenceGauge.jsx";
import { VerificationLoader } from "../components/loaders/VerificationLoader.jsx";
import { SkeletonCard } from "../components/loaders/SkeletonCard.jsx";
import {
  MOCK_VERIFICATION_RESULT,
  MOCK_RECENT_SEARCHES,
} from "../utils/mockData.js";
import { formatDate, formatTime } from "../utils/formatters.js";

export function DashboardPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState(MOCK_RECENT_SEARCHES);
  const [showHistory, setShowHistory] = useState(false);

  const handleVerify = async (claim) => {
    setLoading(true);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      // Mock result with slight variance
      const mockResult = {
        ...MOCK_VERIFICATION_RESULT,
        claim,
        confidence: Math.random() * 0.2 + 0.8,
        verdict: ["real", "fake", "misleading"][Math.floor(Math.random() * 3)],
      };
      setResult(mockResult);
      setLoading(false);

      // Add to recent searches
      setRecentSearches((prev) => [
        {
          id: Date.now(),
          claim,
          verdict: mockResult.verdict,
          timestamp: new Date(),
        },
        ...prev.slice(0, 9),
      ]);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Claim Verification</h1>
          <p className="text-dark-400">
            Enter a claim and let our AI search through millions of sources to
            verify it
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Input Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-xl glass border border-dark-700/50 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Search size={24} className="text-accent-cyan" />
                <h2 className="text-xl font-semibold">Enter a Claim</h2>
              </div>
              <ClaimInput onSubmit={handleVerify} loading={loading} />
            </motion.div>

            {/* Loading State */}
            <AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="mb-8"
                >
                  <VerificationLoader />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Result */}
            <AnimatePresence>
              {result && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="space-y-6"
                >
                  {/* Claim Summary */}
                  <motion.div
                    className="p-6 rounded-xl glass border border-dark-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-dark-400 text-sm mb-2">Verified Claim</p>
                    <p className="text-lg font-semibold mb-4">{result.claim}</p>

                    <div className="flex items-center justify-between">
                      <p className="text-dark-400 text-sm">
                        {formatDate(result.timestamp)} at{" "}
                        {formatTime(result.timestamp)}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-dark-800 transition-colors"
                      >
                        <Download size={16} />
                        Export
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Verdict */}
                  <motion.div
                    className="p-6 rounded-xl glass border border-dark-700/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <h3 className="text-lg font-semibold mb-6">AI Verdict</h3>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-1">
                        <ConfidenceGauge
                          confidence={result.confidence}
                          verdict={result.verdict}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3">Reasoning</h4>
                        <p className="text-dark-300 text-sm leading-relaxed">
                          {result.reasoning}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Evidence Section */}
                  <motion.div
                    className="p-6 rounded-xl glass border border-dark-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-lg font-semibold mb-4">
                      Sources ({result.evidence.length})
                    </h3>
                    <div className="space-y-3">
                      {result.evidence.map((evidence, i) => (
                        <EvidenceCard key={i} evidence={evidence} index={i} />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Searches */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 rounded-xl glass border border-dark-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <History size={18} className="text-accent-cyan" />
                  Recent Searches
                </h3>
              </div>

              <div className="space-y-2">
                {recentSearches.slice(0, 5).map((search) => (
                  <motion.button
                    key={search.id}
                    onClick={() => handleVerify(search.claim)}
                    className="w-full text-left p-3 rounded-lg hover:bg-dark-800/50 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <p className="text-sm line-clamp-2 group-hover:text-accent-cyan transition-colors">
                      {search.claim}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-dark-500">
                        {formatDate(search.timestamp)}
                      </span>
                      <span
                        className={`text-xs font-semibold capitalize px-2 py-1 rounded ${
                          search.verdict === "real"
                            ? "bg-verdict-real/20 text-verdict-real"
                            : search.verdict === "fake"
                              ? "bg-verdict-fake/20 text-verdict-fake"
                              : "bg-verdict-misleading/20 text-verdict-misleading"
                        }`}
                      >
                        {search.verdict}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl glass border border-dark-700/50"
            >
              <h3 className="font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-dark-400 text-sm">Verifications Today</p>
                  <p className="text-2xl font-bold text-accent-cyan">
                    {recentSearches.length}
                  </p>
                </div>
                <div className="pt-3 border-t border-dark-700/50">
                  <p className="text-dark-400 text-sm">Average Confidence</p>
                  <p className="text-2xl font-bold text-accent-purple">
                    {Math.round(Math.random() * 20 + 80)}%
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
