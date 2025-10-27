import axios from "axios";

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// getNewsByCountry
export const getNewsByCountry = async (countryCode) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/top-headlines?country=${countryCode.toLowerCase()}&pageSize=3&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    if (error.response?.status === 426) {
      console.warn("NewsAPI upgrade required or rate limit exceeded");
    }
    return [];
  }
};
