import { EnvironmentOutlined } from '@ant-design/icons';
import './location-weather.css';
import { Divider } from 'antd';

export default function LocationWeather(){
    return (
        <>
            <div className="weather-location-display">

                <EnvironmentOutlined style={{color:'#ffffffad',fontSize:'40px'}}/>
                <span className="weather-city-style">The Havana </span><br />
                <span className="weather-date-style">Monday, November 2, 2020</span>   
                <Divider className="weather-divider-style" />  
           </div>
        </>
    );
}