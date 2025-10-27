import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getCountryByName } from "../services/countriesAPI";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import CountryMap from "../components/CountryMap";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import "./CountryDetails.css";

export default function CountryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        setLoading(true);
        const data = await getCountryByName(name);
        setCountry(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch country details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [name]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!country) return <ErrorMessage message="Country not found" />;

  // Helper function to format objects into readable strings
  const formatLanguages = (languages) => {
    return Object.values(languages).join(", ");
  };

  const formatCurrencies = (currencies) => {
    return Object.values(currencies)
      .map((curr) => `${curr.name} (${curr.symbol})`)
      .join(", ");
  };

  return (
    <div className="country-details">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <div className="details-header">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="flag-large"
        />
        <div className="header-info">
          <h1>{country.name.common}</h1>
          <h2>{country.name.official}</h2>
        </div>
      </div>

      {country.capital && country.capital[0] && (
        <WeatherCard city={country.capital[0]} />
      )}

      <div className="details-grid">
        <div className="details-section">
          <h3>📊 General Information</h3>
          <div className="info-list">
            <div className="info-item">
              <span className="info-label">Capital:</span>
              <span>{country.capital?.[0] || "N/A"}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Region:</span>
              <span>{country.region}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Subregion:</span>
              <span>{country.subregion || "N/A"}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Population:</span>
              <span>{country.population.toLocaleString()}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Area:</span>
              <span>{country.area.toLocaleString()} km²</span>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h3>🌐 Languages & Currencies</h3>
          <div className="info-list">
            <div className="info-item">
              <span className="info-label">Languages:</span>
              <span>{formatLanguages(country.languages)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Currencies:</span>
              <span>{formatCurrencies(country.currencies)}</span>
            </div>
          </div>
        </div>
      </div>

      {country.borders && country.borders.length > 0 && (
        <div className="borders-section">
          <h3>🗺️ Border Countries</h3>
          <div className="borders-list">
            {country.borders.map((border) => (
              <span key={border} className="border-tag">
                {border}
              </span>
            ))}
          </div>
        </div>
      )}

      <CountryMap
        latlng={country.latlng}
        countryName={country.name.common}
        capital={country.capital?.[0]}
      />

      {country.cca2 && <NewsCard countryCode={country.cca2} />}
    </div>
  );
}
