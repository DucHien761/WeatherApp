import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState} from 'react';
import WeatherStatus from './component/WeatherStatus';
import WeatherDetail from './component/WeatherDetail';
import LineChart from './component/Chart';
import {UserData} from './component/Data'


function App() {

  const [userData, setUserData] = useState({
    lables: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor:"black",
      borderWidth:"2",
    },
  ],
  });

  


  return (
    <div className="WeatherApp">
    <div className="WeatherStatus">
    <WeatherStatus  />
    </div>
    <div className="WeatherDetail">
    <WeatherDetail />
     </div>
     <div className="Chart">
       <LineChart chartData={UserData}/>
     </div>
    </div>      

  );
}

export default App;
