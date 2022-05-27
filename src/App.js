import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState} from 'react';

function App() {

//const url = `https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=0cb082396847d1853b2313a5d96855a0`
  

  const api = {
    key: "0cb082396847d1853b2313a5d96855a0",
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

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
     <div className="container">
     <div className='weather-summary'>

     <div className="search-box">
         <input type="text"
                className='search-bar'
                placeholder='Search...'
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
          />
       </div>

      

    {(typeof weather.weather != "undefined") ? 

        ( <div>
        <div className="location-box">
          <div className='location'>
            {weather.name}, {weather.sys.country}
          </div>
          <div className="detail-col-temp">{Math.round(weather.main.temp)} F</div>
          {/* <div className="detail-col-main">{weather.weather.main}</div> */}
          <div className="date">
            {dateBuilder(new Date())}
          </div>

          <div className="weather-detail">
                { weather.weather.map((detail) => 
                 <ul key={detail.toString()}>
                  
                  <li>{detail.main}</li>
                  <li>{detail.description}</li>
                  
                
                </ul> 
                )}
              
          {/* <div className="weather-detail main">  

          </div> */}
          </div>


        </div>
        </div>) :  ('')
      }




     <div className="header">
          <div className='burger'>
            <span></span>
            <span></span>
            <span></span> 
          </div>
     </div>   
     </div>
     




         <div className="Weather-chart">
         </div>
         
       </div>
     </div>
    
  );
}

export default App;
