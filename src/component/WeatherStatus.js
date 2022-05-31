
import React from 'react';
import {useState} from 'react';

function WeatherStatus() {
  
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
 
    return(
        
<div className="WeatherStatus">

    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <div className="container">
        <div className='weather-main'>
   
        <div className="search-box">
            <input type="text"
                   className='search-bar'
                   placeholder='Search...'
                   onChange={e => setQuery(e.target.value)}
                   value={query}
                   onKeyPress={search}
             />
          </div>




   </div>

   {(typeof weather.weather != "undefined") ? 
           ( <div>
           <div className="location-box">   
           <div className='location'>
            {weather.name}, {weather.sys.country}
          </div>
             <div className="date">
               {dateBuilder(new Date())}
             </div>
   
             <div className="weather-main">
                   { weather.weather.map((detail) => 
                    <ul key={detail.toString()}>                 
                       <div>{detail.main}</div>
                       <div>{detail.description}</div>     
                   </ul> 
                   )}
                 
             </div>
             <div className="state-icon">
             <img  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
             </div>
            <div className="pressure">
              <div className='col-main'>pressure:{weather.main.pressure}</div>
              <div className='col-main'>humidity:{weather.main.humidity}</div>
              <div className='col-main'>temp_max:{weather.main.temp_max}</div>
              <div className='col-main'>temp_min:{weather.main.temp_min}</div>

            </div>        
   
           </div>
           </div>) :  
           ('')
         }
   </div>

         
      
        
    </div>
   
       
    </div>   
    )}


export default WeatherStatus;