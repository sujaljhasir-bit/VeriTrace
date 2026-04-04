import { chatbotClient } from "./api.js";

export const chatbotService = {
  sendMessage: async (message) => {
    try {
      const response = await chatbotClient.post("/chat", { message });
      return response.data.reply;
    } catch (error) {
      console.error("Chat error:", error);
      throw error;
    }
  },

  getSuggestedPrompts: async () => {
    return [
      "How do I verify a suspicious claim?",
      "What are common misinformation tactics?",
      "How can I identify deep fakes?",
      "What makes a reliable news source?",
      "How do I fact-check images online?",
    ];
  },
};
