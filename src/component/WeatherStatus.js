
import React from 'react';
import {useState} from 'react';

function WeatherStatus() {
  
    const api = { 
        key: "d7722a9c95188976d02bb7ec898ba5e2",
        base: "https://api.openweathermap.org/data/2.5/"
      }
    
    

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('')

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {

        setQuery('');
        setWeather(result);

        
        console.log(result);
   
      
        });
      }
  }

 
    return (
      <div className="WeatherStatus">
        <div
          className={
            typeof weather.main != "undefined"
              ? weather.main.temp > 16
                ? "app warm"
                : "app"
              : "app"
          }
        >
          <div className="container">
            <div className="header">
              <div class="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="title">
                <div role="myENV-test">myENV</div>
                <div class="list-city">
                  <span class="city-name">Ho Chi Minh</span>
                  <i class="fal fa-angle-down fa-lg"></i>
                </div>
                <div class="dropdown ">
                  <div class="option">Ho Chi Minh</div>
                  <div class="option">Vinh</div>
                  <div class="option">Singapore</div>
                </div>
              </div>
              <div>
                <i class="fas fa-bell fa-2x"></i>
              </div>
            </div>
            <div className="weathersummary">
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
              <div>
                <div className="location-box">
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>

                  <div className="weather-main">
                    <div className="state-icon">
                      <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                      />
                    </div>
                    <div>
                      {weather.weather.map((detail) => (
                        <ul key={detail.id}>
                          <div className="main-title">
                            <div className="state">{detail.main}</div>
                            <div className="detail">
                              {Math.round(weather.main.temp_max)}°C
                            </div>
                          </div>
                        </ul>
                      ))}
                    </div>
                    <div className="detail">
                      <i className="far fa-tint"></i>
                      <span>{weather.wind.deg}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          

         
            <div className="weather-detail">
              <div className="col-detail">
                <div className="title-detail"> PSI</div>
                <div className="detail-value psi">10</div>
                <div className="detail-state">Good</div>
              </div>
              <div className="col-detail">
                <div className="title-detail">
                  {" "}
                  temp {Math.round(weather?.main?.temp_max)}
                </div>
                <div className="detail-value"></div>
                <div className="detail-state"></div>
              </div>
              <div className="col-detail">
                <div className="title-detail"> deg </div>
                <div className="circle-icon"></div>
              </div>
              <div className="col-detail">
                <div className="add-icon">
                  <i className="far fa-plus-circle fa-2x"></i>
                </div>
                <div className="add-text">Add</div>
              </div>       
          </div>


          
            </div>
        </div>
      </div>
    );}


export default WeatherStatus;