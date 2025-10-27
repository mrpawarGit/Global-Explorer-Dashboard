import { useMemo } from "react";
import { useCountries } from "../hooks/useCountries";
import { useFavoritesContext } from "../context/FavoritesContext";
import CountryCard from "../components/CountryCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import "./Favorites.css";

export default function Favorites() {
  const { countries, loading, error } = useCountries();
  const { favorites, clearAllFavorites } = useFavoritesContext();

  // Filter to get only favorite countries
  const favoriteCountries = useMemo(() => {
    return countries.filter((country) => favorites.includes(country.cca3));
  }, [countries, favorites]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>My Favorite Countries</h1>
        <p>
          {favoriteCountries.length === 0
            ? "No favorites yet. Start exploring and add countries to your favorites!"
            : `You have ${favoriteCountries.length} favorite ${
                favoriteCountries.length === 1 ? "country" : "countries"
              }`}
        </p>
        {favoriteCountries.length > 0 && (
          <button onClick={clearAllFavorites} className="clear-all-btn">
            Clear All Favorites
          </button>
        )}
      </div>

      {favoriteCountries.length === 0 ? (
        <div className="no-favorites">
          <div className="no-favorites-icon">❤️</div>
          <h2>No Favorites Yet</h2>
          <p>
            Click the heart icon on any country card to add it to your
            favorites!
          </p>
          <a href="/" className="browse-btn">
            Browse Countries
          </a>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoriteCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
