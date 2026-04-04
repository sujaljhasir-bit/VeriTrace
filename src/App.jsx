import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { useToast } from "./hooks/useToast.js";
import { ToastContainer } from "./components/common/Toast.jsx";
import { Navbar } from "./components/common/Navbar.jsx";
import { Footer } from "./components/common/Footer.jsx";

import { LandingPage } from "./pages/LandingPage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { ChatbotPage } from "./pages/ChatbotPage.jsx";
import { AnalyticsPage } from "./pages/AnalyticsPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { CrimeHotspots } from "./pages/CrimeHotspots.jsx";
import { NotFound } from "./pages/NotFound.jsx";

import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/glassmorphism.css";

function AppContent() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/crime-hotspots" element={<CrimeHotspots />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}
