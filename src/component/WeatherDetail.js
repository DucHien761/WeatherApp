import { React, useContext, useEffect, useState } from "react";
import { useAppContext } from "react";
import axios from "axios";

import { ReferenceDataContext } from "../component/Context/ReferenceDataContext";

function WeatherDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const { weather, setWeather } = useContext(ReferenceDataContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.openweathermap.org/data/2.5/")
      .then((res) => res.data)
      .then(setWeather)
      .finally(() => setIsLoading(false));
  }, [axios, setWeather]);

  const renderWeatherdata = () => {
    weather.map((type) => <li>{type}</li>);
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <ul>{renderWeatherdata}</ul>}
      <div className="weather-detail">
            <div className="col-detail">
              <div className="title-detail"> PSI</div>
              <div className="detail-value__psi">10</div>
              <div className="detail-state">Good</div>
            </div>
            <div className="col-detail">
              <div className="title-detail">
                    Rain
              </div>
              <div className="detail-value">10</div>
              <div className="detail-state">mm</div>
            </div>
            <div className="col-detail">
              <div className="title-detail"> DEG </div>
              <div className="circle-icon"></div>
              <div className="circle-review"></div>
            </div>
            <div className="col-detail">
              <div className="add-icon">
                <i className="far fa-plus-circle fa-2x"></i>
              </div>
              <div className="add-text">Add</div>
            </div>
          </div>
    </>

    
  );

  //     const api = {
  //         key: "bde9f95555d3c5f1f74ca65c15176909",
  //         base: "https://api.openweathermap.org/data/2.5/"
  //       }
  //     const [query, setQuery] = useState('');
  //     const [weather, setWeather] = useState('');

  //     const getData = () => {
  //         fetch(`${api.base}weather?q=Dubai&units=metric&APPID=${api.key}`)
  //         .then(res => res.json())
  //         .then(result => {

  //                 setQuery('');
  //                 setWeather(result);
  //         });
  //         }

  // useEffect(() => {
  //     getData()
  //   }, [])

  //     return(

  //         <div>
  //             {weather?.wind?.speed}
  //         </div>

  //     )
}

export default WeatherDetail;
