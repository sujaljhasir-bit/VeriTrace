import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

export function VerdictChart({ data }) {
  const COLORS = {
    real: "#10b981",
    fake: "#ef4444",
    misleading: "#f59e0b",
  };

  const chartData = [
    { name: "Real", value: data?.real || 0, fill: COLORS.real },
    { name: "Fake", value: data?.fake || 0, fill: COLORS.fake },
    {
      name: "Misleading",
      value: data?.misleading || 0,
      fill: COLORS.misleading,
    },
  ];

  return (
    <motion.div
      className="p-6 rounded-xl glass border border-dark-700/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="text-lg font-semibold mb-6">Verdict Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "0.5rem",
            }}
            formatter={(value) => [value, "Claims"]}
          />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
