export const MOCK_VERIFICATION_RESULT = {
  id: "ver-001",
  claim: "A famous celebrity won a major award yesterday",
  verdict: "real",
  confidence: 0.92,
  timestamp: new Date().toISOString(),
  reasoning:
    "Verified through multiple reliable sources including official announcements and news outlets.",
  evidence: [
    {
      id: "src-001",
      title: "Celebrity Wins Prestigious Award at Annual Ceremony",
      url: "https://news.example.com/article1",
      source: "news.example.com",
      excerpt:
        "In a stunning show of talent and artistry, the celebrity took home the award for best performance...",
      relevance: 0.95,
      credibility: 0.98,
    },
    {
      id: "src-002",
      title: "Official Award Ceremony Results Published",
      url: "https://awards.example.com/2024results",
      source: "awards.example.com",
      excerpt:
        "The official results from the 2024 awards ceremony have been released. Winners in all categories...",
      relevance: 0.93,
      credibility: 0.99,
    },
    {
      id: "src-003",
      title: "Celebrity Posts Victory Message on Social Media",
      url: "https://twitter.com/celebrity/status/123",
      source: "twitter.com",
      excerpt:
        "Grateful and honored for this recognition. Thank you to the academy and everyone who supported me!",
      relevance: 0.88,
      credibility: 0.95,
    },
  ],
};

export const MOCK_RECENT_SEARCHES = [
  {
    id: 1,
    claim: "World record broken in swimming competition",
    verdict: "real",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: 2,
    claim: "Aliens landed in downtown city",
    verdict: "fake",
    timestamp: new Date(Date.now() - 7200000),
  },
  {
    id: 3,
    claim: "Stock market reached all-time high",
    verdict: "misleading",
    timestamp: new Date(Date.now() - 10800000),
  },
];

export const MOCK_CHAT_HISTORY = [
  {
    id: 1,
    title: "Understanding Deep Fakes",
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: 2,
    title: "How to Spot Misinformation",
    timestamp: new Date(Date.now() - 172800000),
  },
  {
    id: 3,
    title: "News Source Credibility Guide",
    timestamp: new Date(Date.now() - 259200000),
  },
];

export const MOCK_ANALYTICS = {
  totalVerifications: 1247,
  realClaims: 482,
  fakeClaims: 456,
  misleadingClaims: 309,
  verificationsByCategory: [
    { name: "Politics", value: 340 },
    { name: "Science", value: 280 },
    { name: "Entertainment", value: 220 },
    { name: "Sports", value: 210 },
    { name: "Business", value: 197 },
  ],
  weeklyTrend: [
    { day: "Mon", verifications: 85 },
    { day: "Tue", verifications: 92 },
    { day: "Wed", verifications: 78 },
    { day: "Thu", verifications: 105 },
    { day: "Fri", verifications: 112 },
    { day: "Sat", verifications: 89 },
    { day: "Sun", verifications: 95 },
  ],
};

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Journalist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    quote:
      "VeriTrace has become an essential tool in my fact-checking process. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "News Editor",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    quote:
      "The accuracy and speed of verification is impressive. Game-changer for newsrooms.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Researcher",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    quote:
      "Outstanding AI-powered platform. Very intuitive interface and reliable results.",
    rating: 4,
  },
];
