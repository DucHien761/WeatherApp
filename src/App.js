import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import React, { useContext, useState } from "react";
import WeatherStatus from "./component/WeatherStatus";
import WeatherDetail from "./component/WeatherDetail";
import Navigation from "./component/Header";

import TideSunChart from "./component/Chart";


// import "chart.js/auto";

import {
  ReferenceDataContext,
  ReferenceDataContextProvider,
} from "./component/Context/ReferenceDataContext";



function App() {
  // const lables = UserData.map((data) => data.year);
  const { weather } = useContext(ReferenceDataContext);



  return (
    <div className="container">
      <div className="Summary">
        <div className="Header">
          <Navigation />
        </div>
        <div className="WeatherStatus">
          <WeatherStatus />
        </div>
        <div className="WeatherDetail">
          <ReferenceDataContextProvider>
            <WeatherDetail />
          </ReferenceDataContextProvider>
        </div>
      </div>
    
    <div className="chart-layout">
      <div className="Chart">
        <TideSunChart/>
      </div>
    </div>
    </div>
  );
}

export default App;
