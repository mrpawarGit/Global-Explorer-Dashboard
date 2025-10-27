import { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/weatherAPI";
import "./WeatherCard.css";

export default function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const data = await getWeatherByCity(city);
      setWeather(data);
      setLoading(false);
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  if (loading) {
    return <div className="weather-loading">Loading weather...</div>;
  }

  if (!weather) {
    return <div className="weather-error">Weather data unavailable</div>;
  }

  return (
    <div className="weather-card">
      <h3>🌤️ Current Weather in {city}</h3>
      <div className="weather-content">
        <div className="weather-main">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <div className="weather-temp">{Math.round(weather.main.temp)}°C</div>
        </div>
        <div className="weather-details">
          <p>
            <strong>{weather.weather[0].main}</strong>
          </p>
          <p>{weather.weather[0].description}</p>
          <div className="weather-info">
            <span>💨 Wind: {weather.wind.speed} m/s</span>
            <span>💧 Humidity: {weather.main.humidity}%</span>
            <span>🌡️ Feels like: {Math.round(weather.main.feels_like)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
