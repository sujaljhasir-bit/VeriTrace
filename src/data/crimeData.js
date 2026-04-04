// Mock data for India Crime Hotspots feature
// This represents fake crime reports data across Indian cities

export const CRIME_CATEGORIES = {
  CYBER_FRAUD: "cyber_fraud",
  IDENTITY_THEFT: "identity_theft",
  EXTORTION: "extortion",
  FINANCIAL_FRAUD: "financial_fraud",
  ROBBERY: "robbery",
};

export const CRIME_CATEGORY_COLORS = {
  cyber_fraud: "#00d9ff", // cyan
  identity_theft: "#a020f0", // purple
  extortion: "#ef4444", // red
  financial_fraud: "#f59e0b", // orange
  robbery: "#10b981", // green
};

export const CRIME_CATEGORY_LABELS = {
  cyber_fraud: "Cyber Fraud",
  identity_theft: "Identity Theft",
  extortion: "Extortion",
  financial_fraud: "Financial Fraud",
  robbery: "Robbery",
};

// Indian cities with coordinates and crime data
export const INDIA_CITIES = [
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi",
    coordinates: [77.1025, 28.7041], // [longitude, latitude]
    fakeReports: 1247,
    primaryCrime: "cyber_fraud",
    riskLevel: "high",
    monthlyTrend: "+12%",
    population: 32000000,
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    coordinates: [72.8777, 19.076],
    fakeReports: 987,
    primaryCrime: "identity_theft",
    riskLevel: "high",
    monthlyTrend: "+8%",
    population: 20400000,
  },
  {
    id: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    coordinates: [77.5946, 12.9716],
    fakeReports: 756,
    primaryCrime: "financial_fraud",
    riskLevel: "medium",
    monthlyTrend: "+15%",
    population: 13600000,
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    coordinates: [80.2707, 13.0827],
    fakeReports: 623,
    primaryCrime: "extortion",
    riskLevel: "medium",
    monthlyTrend: "+5%",
    population: 10400000,
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    coordinates: [88.3639, 22.5726],
    fakeReports: 534,
    primaryCrime: "robbery",
    riskLevel: "medium",
    monthlyTrend: "+3%",
    population: 14900000,
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    coordinates: [78.4867, 17.385],
    fakeReports: 445,
    primaryCrime: "cyber_fraud",
    riskLevel: "low",
    monthlyTrend: "+7%",
    population: 10100000,
  },
  {
    id: "pune",
    name: "Pune",
    state: "Maharashtra",
    coordinates: [73.8567, 18.5204],
    fakeReports: 398,
    primaryCrime: "identity_theft",
    riskLevel: "low",
    monthlyTrend: "+9%",
    population: 5800000,
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    coordinates: [72.5714, 23.0225],
    fakeReports: 312,
    primaryCrime: "financial_fraud",
    riskLevel: "low",
    monthlyTrend: "+4%",
    population: 8000000,
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    coordinates: [75.7873, 26.9124],
    fakeReports: 289,
    primaryCrime: "extortion",
    riskLevel: "low",
    monthlyTrend: "+6%",
    population: 4000000,
  },
  {
    id: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    coordinates: [80.9462, 26.8467],
    fakeReports: 267,
    primaryCrime: "robbery",
    riskLevel: "low",
    monthlyTrend: "+2%",
    population: 3500000,
  },
];

// Crime category distribution data
export const CRIME_DISTRIBUTION = [
  { name: "Cyber Fraud", value: 35, color: "#00d9ff" },
  { name: "Identity Theft", value: 28, color: "#a020f0" },
  { name: "Financial Fraud", value: 20, color: "#f59e0b" },
  { name: "Extortion", value: 12, color: "#ef4444" },
  { name: "Robbery", value: 5, color: "#10b981" },
];

// Monthly trend data (last 12 months)
export const MONTHLY_TRENDS = [
  {
    month: "Jan",
    reports: 2100,
    cyber: 735,
    identity: 588,
    financial: 420,
    extortion: 252,
    robbery: 105,
  },
  {
    month: "Feb",
    reports: 2250,
    cyber: 788,
    identity: 630,
    financial: 450,
    extortion: 270,
    robbery: 112,
  },
  {
    month: "Mar",
    reports: 2400,
    cyber: 840,
    identity: 672,
    financial: 480,
    extortion: 288,
    robbery: 120,
  },
  {
    month: "Apr",
    reports: 2180,
    cyber: 763,
    identity: 610,
    financial: 436,
    extortion: 262,
    robbery: 109,
  },
  {
    month: "May",
    reports: 2350,
    cyber: 823,
    identity: 658,
    financial: 470,
    extortion: 282,
    robbery: 117,
  },
  {
    month: "Jun",
    reports: 2520,
    cyber: 882,
    identity: 706,
    financial: 504,
    extortion: 302,
    robbery: 126,
  },
  {
    month: "Jul",
    reports: 2680,
    cyber: 938,
    identity: 750,
    financial: 536,
    extortion: 322,
    robbery: 134,
  },
  {
    month: "Aug",
    reports: 2450,
    cyber: 858,
    identity: 686,
    financial: 490,
    extortion: 294,
    robbery: 122,
  },
  {
    month: "Sep",
    reports: 2610,
    cyber: 914,
    identity: 731,
    financial: 522,
    extortion: 313,
    robbery: 130,
  },
  {
    month: "Oct",
    reports: 2780,
    cyber: 973,
    identity: 778,
    financial: 556,
    extortion: 334,
    robbery: 139,
  },
  {
    month: "Nov",
    reports: 2950,
    cyber: 1033,
    identity: 826,
    financial: 590,
    extortion: 354,
    robbery: 147,
  },
  {
    month: "Dec",
    reports: 3120,
    cyber: 1092,
    identity: 874,
    financial: 624,
    extortion: 374,
    robbery: 156,
  },
];

// Top cities by fake reports (for bar chart)
export const TOP_CITIES_DATA = [
  { city: "Delhi", reports: 1247, state: "Delhi" },
  { city: "Mumbai", reports: 987, state: "Maharashtra" },
  { city: "Bangalore", reports: 756, state: "Karnataka" },
  { city: "Chennai", reports: 623, state: "Tamil Nadu" },
  { city: "Kolkata", reports: 534, state: "West Bengal" },
  { city: "Hyderabad", reports: 445, state: "Telangana" },
  { city: "Pune", reports: 398, state: "Maharashtra" },
  { city: "Ahmedabad", reports: 312, state: "Gujarat" },
];

// Region-wise crime intensity (for area chart)
export const REGION_DATA = [
  {
    region: "North India",
    delhi: 1247,
    punjab: 234,
    haryana: 189,
    uttarakhand: 156,
  },
  {
    region: "West India",
    maharashtra: 1385,
    gujarat: 312,
    rajasthan: 289,
    goa: 67,
  },
  {
    region: "South India",
    karnataka: 756,
    tamilnadu: 623,
    telangana: 445,
    kerala: 298,
  },
  {
    region: "East India",
    westbengal: 534,
    bihar: 234,
    odisha: 189,
    jharkhand: 145,
  },
  {
    region: "Central India",
    madhyapradesh: 345,
    chhattisgarh: 123,
    uttarpradesh: 267,
  },
];

// Recent alerts data
export const RECENT_ALERTS = [
  {
    id: 1,
    city: "Delhi",
    message: "Delhi reported increased identity theft cases this week",
    crimeType: "identity_theft",
    severity: "high",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    trend: "+23%",
  },
  {
    id: 2,
    city: "Mumbai",
    message: "Mumbai shows highest cyber fraud activity in Q4",
    crimeType: "cyber_fraud",
    severity: "high",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    trend: "+18%",
  },
  {
    id: 3,
    city: "Bangalore",
    message: "Bangalore experiencing spike in financial fraud reports",
    crimeType: "financial_fraud",
    severity: "medium",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    trend: "+12%",
  },
  {
    id: 4,
    city: "Chennai",
    message: "Chennai reports unusual extortion activity patterns",
    crimeType: "extortion",
    severity: "medium",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    trend: "+9%",
  },
];

// Statistics summary
export const CRIME_STATS = {
  totalFakeReports: INDIA_CITIES.reduce(
    (sum, city) => sum + city.fakeReports,
    0,
  ),
  highestHotspotCity: INDIA_CITIES.reduce((max, city) =>
    city.fakeReports > max.fakeReports ? city : max,
  ),
  mostCommonCrimeType: CRIME_CATEGORIES.CYBER_FRAUD,
  citiesTracked: INDIA_CITIES.length,
  averageReportsPerCity: Math.round(
    INDIA_CITIES.reduce((sum, city) => sum + city.fakeReports, 0) /
      INDIA_CITIES.length,
  ),
  riskDistribution: {
    high: INDIA_CITIES.filter((city) => city.riskLevel === "high").length,
    medium: INDIA_CITIES.filter((city) => city.riskLevel === "medium").length,
    low: INDIA_CITIES.filter((city) => city.riskLevel === "low").length,
  },
};

// Filter options
export const FILTER_OPTIONS = {
  crimeTypes: Object.values(CRIME_CATEGORIES),
  sortOptions: [
    { value: "reports_desc", label: "Highest Reports" },
    { value: "reports_asc", label: "Lowest Reports" },
    { value: "alphabetical", label: "Alphabetical" },
    { value: "risk_desc", label: "Highest Risk" },
  ],
  riskLevels: ["high", "medium", "low"],
};

// Utility functions
export const getCityById = (id) => INDIA_CITIES.find((city) => city.id === id);

export const getCitiesByCrimeType = (crimeType) =>
  INDIA_CITIES.filter((city) => city.primaryCrime === crimeType);

export const getCitiesByRiskLevel = (riskLevel) =>
  INDIA_CITIES.filter((city) => city.riskLevel === riskLevel);

export const getTopCities = (limit = 10) =>
  [...INDIA_CITIES]
    .sort((a, b) => b.fakeReports - a.fakeReports)
    .slice(0, limit);

export const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
};

export const getRiskColor = (riskLevel) => {
  switch (riskLevel) {
    case "high":
      return "#ef4444";
    case "medium":
      return "#f59e0b";
    case "low":
      return "#10b981";
    default:
      return "#6b7280";
  }
};

export const getCrimeColor = (crimeType) =>
  CRIME_CATEGORY_COLORS[crimeType] || "#6b7280";
