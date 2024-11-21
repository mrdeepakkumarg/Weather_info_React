// src/App.js

import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    const API_KEY = "251bb4ad75855941ec8b1d1873ebd359";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("Location not found");
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <SearchBar fetchWeather={fetchWeather}/>
      {error && <p>{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;
