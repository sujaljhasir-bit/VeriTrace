import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Home, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { CrimeStatsCards } from "../components/crime/CrimeStatsCards.jsx";
import { CrimeMap } from "../components/crime/CrimeMap.jsx";
import { CrimeFilters } from "../components/crime/CrimeFilters.jsx";
import { CrimeCharts } from "../components/crime/CrimeCharts.jsx";
import { CrimeCityCard } from "../components/crime/CrimeCityCard.jsx";
import { CrimeAlerts } from "../components/crime/CrimeAlerts.jsx";
import { INDIA_CITIES } from "../data/crimeData.js";

export function CrimeHotspots() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [filters, setFilters] = useState({
    crimeType: null,
    searchQuery: "",
    sortBy: "reports_desc",
    dateRange: "last_30_days",
  });

  // Filter and sort cities based on current filters
  const filteredCities = INDIA_CITIES.filter((city) => {
    if (filters.crimeType && city.primaryCrime !== filters.crimeType)
      return false;
    if (
      filters.searchQuery &&
      !city.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    )
      return false;
    return true;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case "reports_desc":
        return b.fakeReports - a.fakeReports;
      case "reports_asc":
        return a.fakeReports - b.fakeReports;
      case "alphabetical":
        return a.name.localeCompare(b.name);
      case "risk_desc":
        const riskOrder = { high: 3, medium: 2, low: 1 };
        return riskOrder[b.riskLevel] - riskOrder[a.riskLevel];
      default:
        return 0;
    }
  });

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      crimeType: null,
      searchQuery: "",
      sortBy: "reports_desc",
      dateRange: "last_30_days",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-96 h-96 rounded-full bg-accent-purple/10 blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-dark-400 mb-6"
          >
            <Link
              to="/"
              className="hover:text-accent-cyan transition-colors flex items-center gap-1"
            >
              <Home size={14} />
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-dark-200">Crime Hotspots</span>
          </motion.nav>

          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 rounded-full glass border border-accent-cyan/30 flex items-center gap-2 w-fit mx-auto">
                <MapPin size={16} className="text-accent-cyan" />
                <span className="text-sm font-medium">
                  India Crime Intelligence
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            >
              <span className="block gradient-text">India Crime</span>
              <span className="block text-dark-100">Hotspots</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-dark-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Track fake crime reports, suspicious activities, and high-risk
              regions across India. Interactive map visualization with real-time
              crime intelligence and analytics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CrimeStatsCards />
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Map Section - Takes up 3 columns on xl screens */}
            <motion.div
              variants={sectionVariants}
              className="xl:col-span-3 space-y-6"
            >
              {/* Map */}
              <div className="glass border border-dark-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={20} className="text-accent-cyan" />
                  <h2 className="text-xl font-semibold text-dark-100">
                    Interactive Crime Map
                  </h2>
                </div>
                <CrimeMap
                  selectedCity={selectedCity}
                  onCitySelect={handleCitySelect}
                  filters={filters}
                />
              </div>

              {/* Charts */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <BarChart3 size={20} className="text-accent-purple" />
                  <h2 className="text-xl font-semibold text-dark-100">
                    Crime Analytics
                  </h2>
                </div>
                <CrimeCharts />
              </div>
            </motion.div>

            {/* Sidebar - Takes up 1 column on xl screens */}
            <motion.div variants={sectionVariants} className="space-y-6">
              {/* Filters */}
              <CrimeFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onReset={handleResetFilters}
              />

              {/* Recent Alerts */}
              <div className="glass border border-dark-700/50 rounded-xl p-6">
                <CrimeAlerts />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* City Cards Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              City Intelligence
            </h2>
            <p className="text-dark-400">
              Detailed crime analysis for major Indian cities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredCities.slice(0, 8).map((city, index) => (
              <CrimeCityCard
                key={city.id}
                city={city}
                index={index}
                onClick={handleCitySelect}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
