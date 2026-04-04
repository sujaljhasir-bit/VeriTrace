import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  MapPin,
  AlertTriangle,
  BarChart3,
  Users,
} from "lucide-react";
import {
  CRIME_STATS,
  CRIME_CATEGORY_LABELS,
  formatNumber,
} from "../../data/crimeData.js";

export function CrimeStatsCards() {
  const stats = [
    {
      title: "Highest Hotspot City",
      value: CRIME_STATS.highestHotspotCity.name,
      subtitle: `${formatNumber(CRIME_STATS.highestHotspotCity.fakeReports)} fake reports`,
      icon: MapPin,
      color: "from-red-500 to-pink-500",
      trend: "+12%",
      trendUp: true,
    },
    {
      title: "Total Fake Reports",
      value: formatNumber(CRIME_STATS.totalFakeReports),
      subtitle: "Across all cities",
      icon: AlertTriangle,
      color: "from-accent-cyan to-accent-purple",
      trend: "+8%",
      trendUp: true,
    },
    {
      title: "Most Common Crime",
      value: CRIME_CATEGORY_LABELS[CRIME_STATS.mostCommonCrimeType],
      subtitle: "Cyber fraud leads",
      icon: BarChart3,
      color: "from-accent-purple to-accent-pink",
      trend: "+15%",
      trendUp: true,
    },
    {
      title: "Cities Tracked",
      value: CRIME_STATS.citiesTracked.toString(),
      subtitle: "Major Indian cities",
      icon: Users,
      color: "from-accent-cyan to-accent-purple",
      trend: "+2",
      trendUp: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -2 }}
          className="group relative p-6 rounded-xl glass border border-dark-700/50 hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-glow-cyan overflow-hidden"
        >
          {/* Background gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <motion.div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <stat.icon size={24} className="text-white" />
              </motion.div>

              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trendUp ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.trendUp ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {stat.trend}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-dark-400 text-sm font-medium">{stat.title}</p>
              <p className="text-dark-500 text-xs">{stat.subtitle}</p>
            </div>
          </div>

          {/* Animated border glow */}
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
        </motion.div>
      ))}
    </motion.div>
  );
}
