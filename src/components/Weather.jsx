import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import './Weather.css';

function Weather() {
  const [isCelsius, setIsCelsius] = useState(true);

  const provinces = [
    {
      name: "Gauteng",
      capital: "Pretoria",
      temperature: { current: 25, min: 15, max: 30 },
      condition: {
        description: "Sunny",
        icon_url: "/assets/sun.png",
      },
      wind: { speed: 5 },
      humidity: 60,
    },
    {
      name: "Western Cape",
      capital: "Cape Town",
      temperature: { current: 20, min: 12, max: 25 },
      condition: {
        description: "Partly Cloudy",
        icon_url: "/assets/sun.png",
      },
      wind: { speed: 3 },
      humidity: 65,
    },
  ];

  const toggleTemperatureUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  const convertToFahrenheit = (temperature) => Math.round((temperature * 9) / 5 + 32);

  const renderTemperature = (temperature) => {
    return isCelsius ? Math.round(temperature) : convertToFahrenheit(temperature);
  };

  return (
    <div className="weather-container">
      <h2>South African Provinces Weather</h2>
      {provinces.map((province, index) => (
        <div className="province" key={index}>
          <h3>{province.name} (Capital: {province.capital})</h3>
          <div className="temp">
            {province.condition.icon_url && (
              <img
                src={province.condition.icon_url}
                alt={province.condition.description}
                className="temp-icon"
              />
            )}
            {renderTemperature(province.temperature.current)}°
            <sup className="temp-deg" onClick={toggleTemperatureUnit}>
              {isCelsius ? "°C" : "°F"}
            </sup>
          </div>
          <p className="weather-des">{province.condition.description}</p>
          <div className="weather-info">
            <div className="col">
              <ReactAnimatedWeather icon="WIND" size={40} />
              <div>
                <p className="wind">{province.wind.speed} m/s</p>
                <p>Wind speed</p>
              </div>
            </div>
            <div className="col">
              <ReactAnimatedWeather icon="RAIN" size={40} />
              <div>
                <p className="humidity">{province.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Weather;
