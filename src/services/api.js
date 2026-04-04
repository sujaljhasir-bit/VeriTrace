import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_VERIFICATION_API || "http://localhost:8000";
const CHATBOT_API_URL =
  import.meta.env.VITE_CHATBOT_API || "http://localhost:5001";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const chatbotClient = axios.create({
  baseURL: CHATBOT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
export { chatbotClient };
