import { motion } from "framer-motion";
import { MapPin, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import {
  CRIME_CATEGORY_LABELS,
  getCrimeColor,
  getRiskColor,
  formatNumber,
} from "../../data/crimeData.js";

export function CrimeCityCard({ city, index, onClick }) {
  const crimeColor = getCrimeColor(city.primaryCrime);
  const riskColor = getRiskColor(city.riskLevel);

  const getRiskBadge = (riskLevel) => {
    const colors = {
      high: "bg-red-500/20 text-red-400 border-red-500/30",
      medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      low: "bg-green-500/20 text-green-400 border-green-500/30",
    };
    return colors[riskLevel] || colors.low;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick?.(city)}
      className="group relative p-4 rounded-xl glass border border-dark-700/50 hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-glow-cyan cursor-pointer overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: crimeColor }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-accent-cyan" />
            <h3 className="font-semibold text-dark-100 group-hover:text-accent-cyan transition-colors">
              {city.name}
            </h3>
          </div>

          <div
            className={`px-2 py-1 rounded-full text-xs font-medium border ${getRiskBadge(city.riskLevel)}`}
          >
            {city.riskLevel.toUpperCase()}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-dark-400">Fake Reports</span>
            <span className="font-bold text-lg gradient-text">
              {formatNumber(city.fakeReports)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-dark-400">Primary Crime</span>
            <span
              className="text-sm font-medium px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${crimeColor}20`,
                color: crimeColor,
                border: `1px solid ${crimeColor}30`,
              }}
            >
              {CRIME_CATEGORY_LABELS[city.primaryCrime]}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-dark-400">Population</span>
            <span className="text-sm text-dark-300">
              {formatNumber(city.population)}
            </span>
          </div>
        </div>

        {/* Trend Indicator */}
        <div className="flex items-center justify-between pt-2 border-t border-dark-700/30">
          <span className="text-xs text-dark-500">Monthly Trend</span>
          <div
            className={`flex items-center gap-1 text-xs font-medium ${
              city.monthlyTrend.includes("+")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {city.monthlyTrend.includes("+") ? (
              <TrendingUp size={12} />
            ) : (
              <TrendingDown size={12} />
            )}
            {city.monthlyTrend}
          </div>
        </div>

        {/* Crime intensity indicator */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-dark-500 mb-1">
            <span>Crime Intensity</span>
            <span>{Math.round((city.fakeReports / 1500) * 100)}%</span>
          </div>
          <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: crimeColor }}
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min((city.fakeReports / 1500) * 100, 100)}%`,
              }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(0, 217, 255, 0)",
            "0 0 0 2px rgba(0, 217, 255, 0.1)",
            "0 0 0 0 rgba(0, 217, 255, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Risk indicator pulse for high-risk cities */}
      {city.riskLevel === "high" && (
        <motion.div
          className="absolute top-2 right-2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AlertTriangle size={16} className="text-red-400" />
        </motion.div>
      )}
    </motion.div>
  );
}
