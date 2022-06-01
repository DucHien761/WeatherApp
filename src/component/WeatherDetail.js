import {React, useState} from 'react';
// import {useAppContext}  from 'react';


function WeatherDetail() {


    
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
        
       
        // console.log(result);
      
        });
      }
  }
    // const [{weather}] = useAppContext();

    return(

<div className="WeatherDetail">

   {( typeof weather.name != "undefined" )  ? (
         <div className='weather-detail'>
                <div className='col-detail'>
                    <div className='title-detail'> PSI</div>
                    <div className='detail-value psi'>{}</div>
                    <div className='detail-state'>Good</div>
                </div>
                <div className='col-detail'>
                    <div className='title-detail'> RAIN</div>
                    <div className='detail-value'>{weather.wind.deg}</div>
                    <div className='detail-state'>mm</div>
                </div>
                <div className='col-detail'>
                    <div className='title-detail'> {weather.wind.speed} </div>
                    <div className='circle-icon'></div>
                </div>
                <div className='col-detail'>
                    <div className='add-icon'><i className="far fa-plus-circle fa-2x"></i></div>
                    <div className='add-text'>Add</div>
                </div>
        </div>
    ) : ('sss')
    }

    
            
</div>

    )}


export default WeatherDetail;