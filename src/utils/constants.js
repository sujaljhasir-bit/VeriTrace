export const VERIFICATION_STATUSES = {
  REAL: "real",
  FAKE: "fake",
  MISLEADING: "misleading",
};

export const STATUS_COLORS = {
  real: "text-verdict-real",
  fake: "text-verdict-fake",
  misleading: "text-verdict-misleading",
};

export const STATUS_BG = {
  real: "bg-verdict-real/10",
  fake: "bg-verdict-fake/10",
  misleading: "bg-verdict-misleading/10",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/", icon: "Home" },
  { label: "Verify", href: "/dashboard", icon: "Search" },
  { label: "Chat", href: "/chatbot", icon: "MessageCircle" },
  { label: "Analytics", href: "/analytics", icon: "BarChart3" },
  { label: "Profile", href: "/profile", icon: "User" },
];
