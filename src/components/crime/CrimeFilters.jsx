import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, X, RotateCcw, Calendar } from "lucide-react";
import {
  CRIME_CATEGORIES,
  CRIME_CATEGORY_LABELS,
  FILTER_OPTIONS,
} from "../../data/crimeData.js";

export function CrimeFilters({ filters, onFiltersChange, onReset }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCrimeTypeChange = (crimeType) => {
    onFiltersChange({
      ...filters,
      crimeType: filters.crimeType === crimeType ? null : crimeType,
    });
  };

  const handleSortChange = (sortBy) => {
    onFiltersChange({ ...filters, sortBy });
  };

  const handleSearchChange = (searchQuery) => {
    onFiltersChange({ ...filters, searchQuery });
  };

  const handleDateRangeChange = (dateRange) => {
    onFiltersChange({ ...filters, dateRange });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass border border-dark-700/50 rounded-xl p-6 h-fit"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Filter size={20} className="text-accent-cyan" />
          <h3 className="text-lg font-semibold text-dark-100">Filters</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden p-2 hover:bg-dark-800 rounded-lg transition-colors"
        >
          {isExpanded ? <X size={16} /> : <Filter size={16} />}
        </button>
      </div>

      <div className={`space-y-6 ${isExpanded ? "block" : "hidden md:block"}`}>
        {/* Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-dark-300">
            Search City
          </label>
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-500"
            />
            <input
              type="text"
              placeholder="Enter city name..."
              value={filters.searchQuery || ""}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all"
            />
          </div>
        </div>

        {/* Crime Type Filter */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-dark-300">
            Crime Type
          </label>
          <div className="space-y-2">
            {Object.entries(CRIME_CATEGORY_LABELS).map(([key, label]) => (
              <motion.button
                key={key}
                onClick={() => handleCrimeTypeChange(key)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                  filters.crimeType === key
                    ? "bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan"
                    : "bg-dark-800/50 border border-dark-700/50 text-dark-400 hover:bg-dark-800 hover:border-dark-600"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">{label}</span>
                  {filters.crimeType === key && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-accent-cyan rounded-full"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-dark-300">Sort By</label>
          <select
            value={filters.sortBy || "reports_desc"}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all"
          >
            {FILTER_OPTIONS.sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range (Dummy) */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-dark-300">
            Date Range
          </label>
          <div className="relative">
            <Calendar
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-500"
            />
            <select
              value={filters.dateRange || "last_30_days"}
              onChange={(e) => handleDateRangeChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all"
            >
              <option value="last_7_days">Last 7 days</option>
              <option value="last_30_days">Last 30 days</option>
              <option value="last_90_days">Last 90 days</option>
              <option value="last_year">Last year</option>
            </select>
          </div>
        </div>

        {/* Active Filters Summary */}
        {(filters.crimeType || filters.searchQuery) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-4 border-t border-dark-700/50"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-dark-300">
                Active Filters
              </span>
              <button
                onClick={onReset}
                className="flex items-center gap-1 text-xs text-accent-cyan hover:text-accent-purple transition-colors"
              >
                <RotateCcw size={12} />
                Reset
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.crimeType && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-cyan/20 text-accent-cyan text-xs rounded-full"
                >
                  {CRIME_CATEGORY_LABELS[filters.crimeType]}
                  <button
                    onClick={() => handleCrimeTypeChange(filters.crimeType)}
                    className="hover:bg-accent-cyan/30 rounded-full p-0.5"
                  >
                    <X size={10} />
                  </button>
                </motion.span>
              )}
              {filters.searchQuery && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-purple/20 text-accent-purple text-xs rounded-full"
                >
                  "{filters.searchQuery}"
                  <button
                    onClick={() => handleSearchChange("")}
                    className="hover:bg-accent-purple/30 rounded-full p-0.5"
                  >
                    <X size={10} />
                  </button>
                </motion.span>
              )}
            </div>
          </motion.div>
        )}

        {/* Reset Button */}
        <motion.button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-lg text-dark-300 hover:bg-dark-800 hover:border-dark-600 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <RotateCcw size={16} />
          Reset All Filters
        </motion.button>
      </div>
    </motion.div>
  );
}
