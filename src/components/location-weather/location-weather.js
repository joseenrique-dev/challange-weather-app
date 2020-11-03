import { EnvironmentOutlined } from '@ant-design/icons';
import './location-weather.css';
import { Divider } from 'antd';

export default function LocationWeather(){
    return (
        <>
            <div className="weather-location-display">

                <EnvironmentOutlined style={{color:'#ffffffad',fontSize:'40px'}}/>
                <span className="weather-info-style">The Havana </span><br />
                <span className="weather-date-style">Monday, November 2, 2020</span>   
                <span className="weather-date-style">19: 25</span>   
                <div className="weather-container-divider">
                    <Divider className="weather-divider-style" />  
                </div>
           </div>
        </>
    );
}