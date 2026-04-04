import { createContext, useState, useCallback } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: "user-001",
    name: "AI Researcher",
    email: "researcher@veritrace.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user001",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const value = {
    user,
    isAuthenticated,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
