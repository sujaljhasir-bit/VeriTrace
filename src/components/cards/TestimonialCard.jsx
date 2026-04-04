import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="p-6 rounded-xl glass border border-dark-700/50 hover:border-accent-purple/50 transition-all"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-accent-cyan text-accent-cyan"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-dark-200 mb-4 italic relative">
        <span className="text-accent-purple text-2xl">"</span>
        {testimonial.quote}
        <span className="text-accent-purple text-2xl">"</span>
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-dark-700/50">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-dark-400 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
