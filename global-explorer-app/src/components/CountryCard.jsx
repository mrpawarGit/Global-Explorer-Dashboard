import { useNavigate } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import "./CountryCard.css";

export default function CountryCard({ country }) {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const favorite = isFavorite(country.cca3);

  const handleClick = () => {
    navigate(`/country/${country.name.common}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent card click
    toggleFavorite(country.cca3);
  };

  return (
    <div className="country-card" onClick={handleClick}>
      <button
        className={`favorite-btn ${favorite ? "active" : ""}`}
        onClick={handleFavoriteClick}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      <div className="country-flag">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          loading="lazy"
        />
      </div>
      <div className="country-info">
        <h3 className="country-name">{country.name.common}</h3>
        <p>
          <span>Capital:</span> {country.capital?.[0] || "N/A"}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Population:</span> {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
