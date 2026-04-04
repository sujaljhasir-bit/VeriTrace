import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingUp, MapPin } from "lucide-react";
import {
  RECENT_ALERTS,
  CRIME_CATEGORY_LABELS,
  getCrimeColor,
} from "../../data/crimeData.js";

export function CrimeAlerts() {
  const getSeverityStyles = (severity) => {
    switch (severity) {
      case "high":
        return {
          bg: "bg-red-500/10",
          border: "border-red-500/30",
          text: "text-red-400",
          icon: "text-red-400",
        };
      case "medium":
        return {
          bg: "bg-yellow-500/10",
          border: "border-yellow-500/30",
          text: "text-yellow-400",
          icon: "text-yellow-400",
        };
      default:
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/30",
          text: "text-blue-400",
          icon: "text-blue-400",
        };
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (hours > 0) {
      return `${hours}h ago`;
    } else if (minutes > 0) {
      return `${minutes}m ago`;
    } else {
      return "Just now";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const alertVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle size={20} className="text-accent-cyan" />
        <h3 className="text-lg font-semibold text-dark-100">Recent Alerts</h3>
      </div>

      <div className="space-y-3">
        {RECENT_ALERTS.map((alert, index) => {
          const styles = getSeverityStyles(alert.severity);
          const crimeColor = getCrimeColor(alert.crimeType);

          return (
            <motion.div
              key={alert.id}
              variants={alertVariants}
              whileHover={{ scale: 1.02, x: 4 }}
              className={`relative p-4 rounded-lg glass border transition-all duration-300 hover:shadow-glow-cyan ${styles.bg} ${styles.border}`}
            >
              {/* Pulse animation for high severity */}
              {alert.severity === "high" && (
                <motion.div
                  className="absolute inset-0 rounded-lg border border-red-500/20"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-accent-cyan" />
                    <span className="font-semibold text-dark-100">
                      {alert.city}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${styles.bg} ${styles.text} border ${styles.border}`}
                    >
                      {alert.severity.toUpperCase()}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-dark-500">
                      <Clock size={12} />
                      {formatTimeAgo(alert.timestamp)}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <p className="text-dark-300 text-sm mb-3 leading-relaxed">
                  {alert.message}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-dark-500">Crime Type:</span>
                    <span
                      className="text-xs font-medium px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: `${crimeColor}20`,
                        color: crimeColor,
                        border: `1px solid ${crimeColor}30`,
                      }}
                    >
                      {CRIME_CATEGORY_LABELS[alert.crimeType]}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-1 text-xs font-medium ${styles.text}`}
                  >
                    <TrendingUp size={12} />
                    {alert.trend}
                  </div>
                </div>
              </div>

              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${crimeColor}05, transparent)`,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* View All Button */}
      <motion.button
        className="w-full mt-4 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-lg text-dark-300 hover:bg-dark-800 hover:border-dark-600 transition-all text-sm"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View All Alerts
      </motion.button>
    </motion.div>
  );
}
