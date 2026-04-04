import { motion } from "framer-motion";
import { User, LogOut, Settings } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { SettingsForm } from "../components/forms/SettingsForm.jsx";

export function ProfilePage() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-screen bg-dark-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-dark-400">Please log in</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <User size={32} className="text-accent-cyan" />
            Profile
          </h1>
          <p className="text-dark-400">Manage your account and preferences</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl glass border border-dark-700/50"
          >
            <div className="text-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
              <p className="text-dark-400 text-sm mb-6">{user.email}</p>

              {/* Stats */}
              <div className="space-y-3 mb-6 text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-dark-400">Member Since</span>
                  <span className="font-semibold">January 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dark-400">Verifications</span>
                  <span className="font-semibold">487</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dark-400">Accuracy</span>
                  <span className="font-semibold text-verdict-real">94.2%</span>
                </div>
              </div>

              <motion.button
                onClick={logout}
                className="w-full px-4 py-2 rounded-lg font-semibold bg-dark-800 hover:bg-dark-700 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut size={18} />
                Logout
              </motion.button>
            </div>
          </motion.div>

          {/* Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <Settings size={24} className="text-accent-cyan" />
              <h3 className="text-2xl font-bold">Settings</h3>
            </div>
            <SettingsForm />
          </motion.div>
        </div>

        {/* Saved Searches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-6 rounded-xl glass border border-dark-700/50"
        >
          <h3 className="text-xl font-semibold mb-4">Saved Searches</h3>
          <div className="space-y-2">
            {[
              "Is this news about AI accurate?",
              "Reality check: Did this celebrity endorse this product?",
              "Checking claim about climate data",
            ].map((search, i) => (
              <motion.div
                key={i}
                className="p-3 rounded-lg hover:bg-dark-800/50 transition-colors cursor-pointer text-sm"
                whileHover={{ x: 5 }}
              >
                {search}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
