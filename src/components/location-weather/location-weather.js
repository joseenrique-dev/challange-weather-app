import { EnvironmentOutlined } from '@ant-design/icons';
import './location-weather.css';
import React from "react";
import dateBuilder from "../../utils/dateBuilder"


function LocationWeather( {city} ){ 
    
    return (
        <>
            <div className="weather-location-display">

                <EnvironmentOutlined style={{color:'#ffffffad',fontSize:'40px'}}/>
                <span className="weather-info-style">{city}</span>
                <span className="weather-date-style">{dateBuilder(new Date())[0]}</span>   
                <span className="weather-date-style">{dateBuilder(new Date())[1]}</span>   
           </div>
        </>
    );
}
export default React.memo(LocationWeather);