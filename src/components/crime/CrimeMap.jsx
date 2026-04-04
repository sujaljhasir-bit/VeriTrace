import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { MapPin, Loader2 } from "lucide-react";
import {
  INDIA_CITIES,
  CRIME_CATEGORY_COLORS,
  CRIME_CATEGORY_LABELS,
  getCrimeColor,
} from "../../data/crimeData.js";

// India topology data (simplified for this demo)
const INDIA_TOPOLOGY = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "India" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [68.1766451354, 7.96553477623],
            [97.4025614766, 7.96553477623],
            [97.4025614766, 35.4940095078],
            [68.1766451354, 35.4940095078],
            [68.1766451354, 7.96553477623],
          ],
        ],
      },
    },
  ],
};

export function CrimeMap({ selectedCity, onCitySelect, filters }) {
  const [hoveredCity, setHoveredCity] = useState(null);
  const [loading, setLoading] = useState(false);

  // Filter cities based on current filters
  const filteredCities = INDIA_CITIES.filter((city) => {
    if (filters.crimeType && city.primaryCrime !== filters.crimeType)
      return false;
    if (
      filters.searchQuery &&
      !city.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  // Sort cities based on sort option
  const sortedCities = [...filteredCities].sort((a, b) => {
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

  const getBubbleSize = (reports) => {
    const minSize = 8;
    const maxSize = 32;
    const maxReports = Math.max(...INDIA_CITIES.map((c) => c.fakeReports));
    const minReports = Math.min(...INDIA_CITIES.map((c) => c.fakeReports));

    const normalized = (reports - minReports) / (maxReports - minReports);
    return minSize + normalized * (maxSize - minSize);
  };

  const getRiskOpacity = (riskLevel) => {
    switch (riskLevel) {
      case "high":
        return 0.9;
      case "medium":
        return 0.7;
      case "low":
        return 0.5;
      default:
        return 0.6;
    }
  };

  if (loading) {
    return (
      <div className="relative h-96 md:h-[500px] rounded-xl glass border border-dark-700/50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={48} className="text-accent-cyan animate-spin" />
          <p className="text-dark-400">Loading crime data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-96 md:h-[500px] rounded-xl glass border border-dark-700/50 overflow-hidden"
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1000,
            center: [78.9629, 20.5937], // Center of India
          }}
          className="w-full h-full"
        >
          <ZoomableGroup zoom={1} center={[78.9629, 20.5937]}>
            {/* India outline */}
            <Geographies geography={INDIA_TOPOLOGY}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1f2937"
                    stroke="#374151"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* City markers */}
            {sortedCities.map((city) => {
              const isSelected = selectedCity?.id === city.id;
              const isHovered = hoveredCity?.id === city.id;
              const bubbleSize = getBubbleSize(city.fakeReports);
              const crimeColor = getCrimeColor(city.primaryCrime);

              return (
                <Marker
                  key={city.id}
                  coordinates={city.coordinates}
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() => onCitySelect(city)}
                >
                  <motion.circle
                    r={bubbleSize}
                    fill={crimeColor}
                    fillOpacity={getRiskOpacity(city.riskLevel)}
                    stroke={isSelected || isHovered ? "#ffffff" : crimeColor}
                    strokeWidth={isSelected || isHovered ? 3 : 1}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: isSelected ? 1.1 : 1,
                      fillOpacity: isHovered
                        ? 0.8
                        : getRiskOpacity(city.riskLevel),
                    }}
                  />

                  {/* City label for larger bubbles */}
                  {bubbleSize > 20 && (
                    <motion.text
                      x={0}
                      y={bubbleSize + 15}
                      textAnchor="middle"
                      className="text-xs font-medium fill-dark-200 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                    >
                      {city.name}
                    </motion.text>
                  )}
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Legend */}
        <div className="absolute top-4 right-4 glass border border-dark-700/50 rounded-lg p-3">
          <h4 className="text-sm font-semibold mb-2 text-dark-200">
            Crime Types
          </h4>
          <div className="space-y-1">
            {Object.entries(CRIME_CATEGORY_LABELS).map(([key, label]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: CRIME_CATEGORY_COLORS[key] }}
                />
                <span className="text-xs text-dark-400">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Zoom controls hint */}
        <div className="absolute bottom-4 left-4 glass border border-dark-700/50 rounded-lg px-3 py-2">
          <p className="text-xs text-dark-400">
            Scroll to zoom • Click cities for details
          </p>
        </div>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredCity && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 glass border border-dark-700/50 rounded-lg p-3 shadow-lg"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} className="text-accent-cyan" />
              <h4 className="font-semibold text-dark-100">
                {hoveredCity.name}
              </h4>
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-dark-400">
                <span className="text-accent-cyan font-medium">
                  {hoveredCity.fakeReports.toLocaleString()}
                </span>{" "}
                fake reports
              </p>
              <p className="text-dark-400">
                Primary:{" "}
                <span className="text-accent-purple">
                  {CRIME_CATEGORY_LABELS[hoveredCity.primaryCrime]}
                </span>
              </p>
              <p className="text-dark-400">
                Risk:{" "}
                <span
                  className={`font-medium ${
                    hoveredCity.riskLevel === "high"
                      ? "text-red-400"
                      : hoveredCity.riskLevel === "medium"
                        ? "text-yellow-400"
                        : "text-green-400"
                  }`}
                >
                  {hoveredCity.riskLevel.toUpperCase()}
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
