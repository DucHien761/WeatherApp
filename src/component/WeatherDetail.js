import { React, useContext, useEffect, useState } from "react";
import { useAppContext } from "react";
import axios from "axios";

import { ReferenceDataContext } from "../component/Context/ReferenceDataContext";

import {ReactComponent as Add } from '../static/media/add.80ec9be2.svg';


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
          <div className="col-detail__title-detail"> PSI</div>
          <div className="col-detail__psi">10</div>
          <div className="col-detail__status">Good</div>
        </div>
        <div className="col-detail">
          <div className="title-detail">Rain</div>
          <div className="col-detail__deg">10{weather?.name}</div>
          <div className="col-detail__status">mm</div>
        </div>
        <div className="col-detail">
          <div className="title-detail"> DEG </div>
          <div className="col-detail__circle-icon"></div>
          <div className="circle-review"></div>
        </div>
        <div className="col-detail">
          <div className="weather-info__add-btn"></div>
          <div className="col-detail__add-text">Add</div>
        </div>
      </div>
    </>
  );
}

export default WeatherDetail;
