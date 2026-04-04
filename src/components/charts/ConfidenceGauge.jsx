import { motion } from "framer-motion";

export function ConfidenceGauge({ confidence, verdict }) {
  const getVerdictColor = () => {
    switch (verdict) {
      case "real":
        return "text-verdict-real";
      case "fake":
        return "text-verdict-fake";
      case "misleading":
        return "text-verdict-misleading";
      default:
        return "text-accent-cyan";
    }
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference * (1 - confidence);

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {/* Gauge */}
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <svg className="w-full h-full" viewBox="0 0 120 120">
          {/* Background arc */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="#1e293b"
            strokeWidth="8"
          />
          {/* Progress arc */}
          <motion.circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="url(#confidenceGradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
          <defs>
            <linearGradient
              id="confidenceGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="#a020f0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(confidence * 100)}%
          </motion.div>
        </div>
      </div>

      {/* Label */}
      <div className="text-center">
        <motion.p
          className={`text-xl font-bold capitalize ${getVerdictColor()}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {verdict}
        </motion.p>
        <p className="text-sm text-dark-400 mt-1">Confidence Score</p>
      </div>
    </motion.div>
  );
}
