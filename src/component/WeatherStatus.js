import React from "react";
import { useState } from "react";

function WeatherStatus() {
  const api = {
    key: "d7722a9c95188976d02bb7ec898ba5e2",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div className="main-status">
      <div className="Weather-search">
        <div className="location">
          {weather.name} {weather?.sys?.country}
        </div>

        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="type the city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
      </div>
      {typeof weather.weather != "undefined" ? (
        <div className="weather-search__detail">
          <div className="weather-main">
            <div className="state-icon">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
            </div>
            <div>
              {weather.weather.map((detail) => (
                <div className="main-title" key={detail.id}>
                  <div className="main-title__state">{detail.main}</div>
                  <div className="main-title__detail">
                    <span className="main-title__detailtemp">
                      {Math.round(weather.main.temp_max)}°C
                    </span>
                    <span className="main-title__detaildeg">
                      {weather?.wind?.deg}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default WeatherStatus;
