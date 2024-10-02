import React, { useState } from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const weatherData = {
    London: { temperature: 15, humidity: 80, description: 'Cloudy' },
    Paris: { temperature: 18, humidity: 70, description: 'Sunny' },
    Tokyo: { temperature: 22, humidity: 60, description: 'Rainy' },
    NewYork: { temperature: 10, humidity: 85, description: 'Windy' },
  };

  const handleSearch = () => {
    if (weatherData[city]) {
      setWeather(weatherData[city]);
    } else {
      setWeather(null);
      alert('City not found!');
    }
  };

  return (
    <div className="App">
      <h1>Simple Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>

      {/* Use the Weather component */}
      <Weather city={city} weather={weather} />
    </div>
  );
}

export default App;
