import React from "react";
import '../App.css'

const Weather = ({ data }) => {
  const { name, main, weather } = data;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Condition: {weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default Weather;
