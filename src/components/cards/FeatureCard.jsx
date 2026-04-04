import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group p-6 rounded-xl glass border border-dark-700/50 hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-glow-cyan"
    >
      <motion.div
        className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 flex items-center justify-center mb-4 group-hover:shadow-glow-cyan"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon size={24} className="text-accent-cyan" />
      </motion.div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-dark-400 text-sm leading-relaxed">{description}</p>

      <motion.div
        className="mt-4 flex items-center text-accent-cyan text-sm opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ x: 5 }}
      >
        Learn more <ExternalLink size={14} className="ml-2" />
      </motion.div>
    </motion.div>
  );
}
