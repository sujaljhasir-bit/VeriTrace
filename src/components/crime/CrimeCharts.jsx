import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import {
  BarChart3,
  PieChart as PieChartIcon,
  TrendingUp,
  Activity,
} from "lucide-react";
import {
  CRIME_DISTRIBUTION,
  TOP_CITIES_DATA,
  MONTHLY_TRENDS,
  CRIME_CATEGORY_COLORS,
} from "../../data/crimeData.js";

export function CrimeCharts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass border border-dark-700/50 rounded-lg p-3 shadow-lg">
          <p className="text-dark-100 font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Crime Distribution Pie Chart */}
        <motion.div
          variants={chartVariants}
          className="glass border border-dark-700/50 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <PieChartIcon size={20} className="text-accent-cyan" />
            <h3 className="text-lg font-semibold text-dark-100">
              Crime Distribution
            </h3>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={CRIME_DISTRIBUTION}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {CRIME_DISTRIBUTION.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: "#9ca3af" }} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Cities Bar Chart */}
        <motion.div
          variants={chartVariants}
          className="glass border border-dark-700/50 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 size={20} className="text-accent-purple" />
            <h3 className="text-lg font-semibold text-dark-100">
              Top Cities by Reports
            </h3>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={TOP_CITIES_DATA}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="city"
                stroke="#9ca3af"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="reports" fill="#00d9ff" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Monthly Trends Line Chart */}
      <motion.div
        variants={chartVariants}
        className="glass border border-dark-700/50 rounded-xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp size={20} className="text-accent-pink" />
          <h3 className="text-lg font-semibold text-dark-100">
            Monthly Fake Report Trends
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={MONTHLY_TRENDS}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: "#9ca3af" }} />
            <Line
              type="monotone"
              dataKey="cyber"
              stroke={CRIME_CATEGORY_COLORS.cyber_fraud}
              strokeWidth={2}
              name="Cyber Fraud"
              dot={{
                fill: CRIME_CATEGORY_COLORS.cyber_fraud,
                strokeWidth: 2,
                r: 4,
              }}
            />
            <Line
              type="monotone"
              dataKey="identity"
              stroke={CRIME_CATEGORY_COLORS.identity_theft}
              strokeWidth={2}
              name="Identity Theft"
              dot={{
                fill: CRIME_CATEGORY_COLORS.identity_theft,
                strokeWidth: 2,
                r: 4,
              }}
            />
            <Line
              type="monotone"
              dataKey="financial"
              stroke={CRIME_CATEGORY_COLORS.financial_fraud}
              strokeWidth={2}
              name="Financial Fraud"
              dot={{
                fill: CRIME_CATEGORY_COLORS.financial_fraud,
                strokeWidth: 2,
                r: 4,
              }}
            />
            <Line
              type="monotone"
              dataKey="extortion"
              stroke={CRIME_CATEGORY_COLORS.extortion}
              strokeWidth={2}
              name="Extortion"
              dot={{
                fill: CRIME_CATEGORY_COLORS.extortion,
                strokeWidth: 2,
                r: 4,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Region-wise Crime Intensity Area Chart */}
      <motion.div
        variants={chartVariants}
        className="glass border border-dark-700/50 rounded-xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Activity size={20} className="text-accent-cyan" />
          <h3 className="text-lg font-semibold text-dark-100">
            Region-wise Crime Intensity
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={MONTHLY_TRENDS}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="reports"
              stroke="#00d9ff"
              fill="url(#colorReports)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00d9ff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00d9ff" stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}
