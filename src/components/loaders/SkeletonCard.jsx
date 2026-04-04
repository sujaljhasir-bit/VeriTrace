import { motion } from "framer-motion";

export function SkeletonCard() {
  return (
    <motion.div
      className="p-4 rounded-lg glass"
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <div className="h-6 bg-dark-700/50 rounded mb-4 w-3/4" />
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-dark-700/50 rounded w-full" />
        <div className="h-4 bg-dark-700/50 rounded w-5/6" />
        <div className="h-4 bg-dark-700/50 rounded w-4/6" />
      </div>
      <div className="flex gap-2">
        <div className="h-8 bg-dark-700/50 rounded w-20" />
        <div className="h-8 bg-dark-700/50 rounded w-20" />
      </div>
    </motion.div>
  );
}

export function SkeletonGrid({ count = 3 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
