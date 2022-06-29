import { React, useContext, useEffect, useState } from "react";
import { useAppContext } from "react";
import axios from "axios";
// import "../styles/layout.scss";

import { ReferenceDataContext } from "../../Context/ReferenceDataContext";

import { ReactComponent as Add } from "../../../static/media/add.80ec9be2.svg";

function WeatherDetail() {
  
  const { weather, setWeather } = useContext(ReferenceDataContext);

  
  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bde9f95555d3c5f1f74ca65c15176909"
  //   );

  //   if (!response.ok) {
  //     throw new Error("Data could not be fetched");
  //   } else {
  //     return response.json();
  //   }
  // };
  
  // useEffect(() => {
  //   fetchData()
  //     .then((res) => {
  //       setWeather(res);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // },[]);

  return (
    <>
      
      <div className="weather-detail">
        <div className="col-detail">
          <div className="col-detail__title-detail"> PSI</div>
          <div className="col-detail__psi">{weather?.main?.pressure}</div>
          <div className="col-detail__status">Good</div>
        </div>
        <div className="col-detail">
          <div className="title-detail">Rain</div>
          <div className="col-detail__deg">10</div>
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
