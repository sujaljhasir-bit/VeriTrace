import { motion } from "framer-motion";
import { useState } from "react";
import { Bell, Save } from "lucide-react";

export function SettingsForm() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: true,
    showAnalytics: true,
  });

  const handleChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Notifications */}
      <motion.div
        className="p-6 rounded-xl glass border border-dark-700/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Bell size={20} className="text-accent-cyan" />
          Notifications
        </h3>

        <div className="space-y-4">
          {[
            { key: "emailNotifications", label: "Email Notifications" },
            { key: "pushNotifications", label: "Push Notifications" },
          ].map(({ key, label }) => (
            <motion.label
              key={key}
              className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-dark-800/30 transition-colors"
              whileHover={{ x: 5 }}
            >
              <input
                type="checkbox"
                checked={settings[key]}
                onChange={() => handleChange(key)}
                className="w-4 h-4 rounded cursor-pointer accent-accent-cyan"
              />
              <span>{label}</span>
            </motion.label>
          ))}
        </div>
      </motion.div>

      {/* Preferences */}
      <motion.div
        className="p-6 rounded-xl glass border border-dark-700/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold mb-4">Display Settings</h3>

        <div className="space-y-4">
          {[
            { key: "darkMode", label: "Dark Mode" },
            { key: "showAnalytics", label: "Show Analytics Dashboard" },
          ].map(({ key, label }) => (
            <motion.label
              key={key}
              className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-dark-800/30 transition-colors"
              whileHover={{ x: 5 }}
            >
              <input
                type="checkbox"
                checked={settings[key]}
                onChange={() => handleChange(key)}
                className="w-4 h-4 rounded cursor-pointer accent-accent-cyan"
              />
              <span>{label}</span>
            </motion.label>
          ))}
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 flex items-center justify-center gap-2"
      >
        <Save size={18} />
        Save Settings
      </motion.button>
    </div>
  );
}
