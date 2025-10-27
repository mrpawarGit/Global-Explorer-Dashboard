import { useNavigate } from "react-router-dom";
import "./CountryCard.css";

export default function CountryCard({ country }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country.name.common}`);
  };

  return (
    <div className="country-card" onClick={handleClick}>
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
