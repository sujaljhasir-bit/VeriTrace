import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Zap } from "lucide-react";
import { VerdictChart } from "../components/charts/VerdictChart.jsx";
import { CategoryChart } from "../components/charts/CategoryChart.jsx";
import { TrendChart } from "../components/charts/TrendChart.jsx";
import { StatCard } from "../components/cards/StatCard.jsx";
import { MOCK_ANALYTICS } from "../utils/mockData.js";

export function AnalyticsPage() {
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
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <BarChart3 size={32} className="text-accent-cyan" />
            Analytics Dashboard
          </h1>
          <p className="text-dark-400">
            Comprehensive insights on claims and verification trends
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <StatCard
              label="Total Verifications"
              value={MOCK_ANALYTICS.totalVerifications.toLocaleString()}
              icon={Zap}
              trend={12}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              label="Real Claims"
              value={MOCK_ANALYTICS.realClaims.toLocaleString()}
              icon={TrendingUp}
              trend={8}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              label="Fake Claims"
              value={MOCK_ANALYTICS.fakeClaims.toLocaleString()}
              icon={TrendingUp}
              trend={-5}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              label="Misleading Claims"
              value={MOCK_ANALYTICS.misleadingClaims.toLocaleString()}
              icon={Users}
              trend={3}
            />
          </motion.div>
        </motion.div>

        {/* Charts */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <VerdictChart
              data={{
                real: MOCK_ANALYTICS.realClaims,
                fake: MOCK_ANALYTICS.fakeClaims,
                misleading: MOCK_ANALYTICS.misleadingClaims,
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CategoryChart data={MOCK_ANALYTICS.verificationsByCategory} />
          </motion.div>
        </motion.div>

        {/* Trend */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TrendChart data={MOCK_ANALYTICS.weeklyTrend} />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Most Common Category",
              value: "Politics",
              description: "27.2% of all claims",
            },
            {
              title: "Highest Accuracy",
              value: "Science",
              description: "96.5% verification accuracy",
            },
            {
              title: "Avg Response Time",
              value: "1.8s",
              description: "Per claim verification",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-6 rounded-xl glass border border-dark-700/50"
            >
              <p className="text-dark-400 text-sm mb-2">{item.title}</p>
              <p className="text-2xl font-bold gradient-text mb-2">
                {item.value}
              </p>
              <p className="text-dark-500 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
