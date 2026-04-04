import { motion } from "framer-motion";

export function StatsCard({ title, value, icon: Icon, color = "cyan" }) {
  const colorClasses = {
    cyan: "text-accent-cyan border-accent-cyan/30",
    purple: "text-accent-purple border-accent-purple/30",
    pink: "text-accent-pink border-accent-pink/30",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-4 rounded-lg glass border ${colorClasses[color]} transition-all`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-dark-400">{title}</span>
        {Icon && <Icon size={18} className={colorClasses[color]} />}
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </motion.div>
  );
}
