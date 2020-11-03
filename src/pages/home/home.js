
import './home.css';
import LocationWeather from "../../components/location-weather/location-weather"
import ForecastResume from '../../components/forecast-resume/forecast-resume';
import ForecastContainerDays from '../../components/forecast-container-days/forecast-container-days';
import { Divider } from 'antd';
export default function AppHome(){

    return (
        <>
            <div className="site-layout-background weather-home-distribution weather-home-visual-style" >
            <LocationWeather />
            <div className="weather-divider-style">
                <Divider />     
            </div>
            <ForecastResume />
            <ForecastContainerDays />
            </div>
        </>
    );
}