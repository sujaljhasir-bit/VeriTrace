import { motion } from "framer-motion";

export function StatCard({
  label,
  value,
  icon: Icon,
  trend = null,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="p-6 rounded-xl glass border border-dark-700/50 hover:border-accent-cyan/50 transition-all hover:shadow-glow-cyan"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-dark-400 text-sm font-medium">{label}</span>
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
            <Icon size={20} className="text-accent-cyan" />
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl md:text-3xl font-bold gradient-text">
          {value}
        </span>
        {trend && (
          <span
            className={`text-xs font-semibold ${
              trend > 0 ? "text-verdict-real" : "text-verdict-fake"
            }`}
          >
            {trend > 0 ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>
    </motion.div>
  );
}
