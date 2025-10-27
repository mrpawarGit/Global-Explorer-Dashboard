import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    // Initialize from localStorage
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading favorites:", error);
      return [];
    }
  });

  // Sync to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites:", error);
    }
  }, [favorites]);

  const toggleFavorite = (countryCode) => {
    setFavorites((prev) => {
      if (prev.includes(countryCode)) {
        return prev.filter((code) => code !== countryCode);
      } else {
        return [...prev, countryCode];
      }
    });
  };

  const isFavorite = (countryCode) => {
    return favorites.includes(countryCode);
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  return { favorites, toggleFavorite, isFavorite, clearAllFavorites };
};
