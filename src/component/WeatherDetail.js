import {React,useEffect, useState} from 'react';
// import {useAppContext}  from 'react';


function WeatherDetail() {


    
    const api = {
        key: "bde9f95555d3c5f1f74ca65c15176909",
        base: "https://api.openweathermap.org/data/2.5/"
      }
    
    const [weather, setWeather] = useState('');

    const getData = () => {
        fetch(`${api.base}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
                setWeather(result);
                console.log(result);
        });
        }    


useEffect(() => {
    getData()
  }, [])


    return(

<div className="Weather-Detail">

   {(  weather.name  !== "undefined" )  ? (
         <div className='weather-detail'>
                <div className='col-detail'>
                    <div className='title-detail'> PSI</div>
                    <div className='detail-value psi'>{}</div>
                    <div className='detail-state'>Good</div>
                </div>
                <div className='col-detail'>
                    <div className='title-detail'> RAIN</div>
                    <div className='detail-value'></div>
                    <div className='detail-state'>mm</div>
                </div>
                <div className='col-detail'>
                    <div className='title-detail'>sss {weather?.wind?.deg} </div>
                    <div className='circle-icon'></div>
                </div>
                <div className='col-detail'>
                    <div className='add-icon'><i className="far fa-plus-circle fa-2x"></i></div>
                    <div className='add-text'>Add</div>
                </div>
        </div>
    ) : ('aaaaa')
    }

    
            
</div>

    )}


export default WeatherDetail;