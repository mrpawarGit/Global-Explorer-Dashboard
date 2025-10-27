import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    // Initialize from localStorage
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
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

  return { favorites, toggleFavorite, isFavorite };
};
