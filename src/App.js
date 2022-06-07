import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import React, { useContext, useState } from "react";
import WeatherStatus from "./component/WeatherStatus";
import WeatherDetail from "./component/WeatherDetail";
import Navigation from "./component/Header";

import LineChart from "./component/Chart";
import { UserData } from "./component/Data";

import "chart.js/auto";

import {
  ReferenceDataContext,
  ReferenceDataContextProvider,
} from "./component/Context/ReferenceDataContext";

function App() {
  // const lables = UserData.map((data) => data.year);
  const { weather } = useContext(ReferenceDataContext);

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.hour),

    datasets: [
      {
        label: "Sunrise",
        data: UserData.map((data) => data.tide),

        sun: UserData.map((data) => data.sun),

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],

        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: "2",
      },
    ],
  });

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

      <div className="Chart">
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
