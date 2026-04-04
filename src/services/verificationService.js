import apiClient from "./api.js";

export const verificationService = {
  verify: async (claim) => {
    try {
      const response = await apiClient.post("/verify", { claim });
      return response.data;
    } catch (error) {
      console.error("Verification error:", error);
      throw error;
    }
  },

  getRecentVerifications: async () => {
    try {
      const response = await apiClient.get("/verifications/recent");
      return response.data;
    } catch (error) {
      console.error("Fetch recent verifications error:", error);
      throw error;
    }
  },

  getVerdictStats: async () => {
    try {
      const response = await apiClient.get("/stats/verdicts");
      return response.data;
    } catch (error) {
      console.error("Fetch stats error:", error);
      throw error;
    }
  },
};
