import { motion } from "framer-motion";

export function VerificationLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      {/* Animated circles */}
      <div className="relative w-24 h-24">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-cyan"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-3 h-3 rounded-full bg-accent-cyan" />
        </motion.div>
      </div>

      {/* Text */}
      <div className="text-center">
        <motion.h3
          className="text-lg font-semibold mb-2"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Verifying Claim
        </motion.h3>
        <motion.p
          className="text-sm text-dark-400"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        >
          Searching trusted sources...
        </motion.p>
      </div>
    </div>
  );
}
