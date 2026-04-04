import { motion } from "framer-motion";

export function PulseLoader() {
  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-accent-cyan"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            delay: i * 0.15,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
