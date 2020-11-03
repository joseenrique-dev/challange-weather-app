
import './home.css';
import LocationWeather from "../../components/location-weather/location-weather"
import ForecastResume from '../../components/forecast-resume/forecast-resume';
import ForecastContainerDays from '../../components/forecast-container-days/forecast-container-days';
import { Divider } from 'antd';
import ForecastDaysCarouser from '../../components/forecast-days-carouser/forecast-days-carouser';
export default function AppHome(){

    return (
        <>
            <div className="site-layout-background weather-home-distribution weather-home-visual-style" >
                <LocationWeather />
                <div className="weather-divider-style weather-location-width-divider-style">
                    <Divider style={{marginTop: "10px"}}/>     
                </div>
                <ForecastResume />
                <div className="weather-divider-style weather-resume-width-divider-style">
                    <Divider />     
                </div>
                <ForecastContainerDays className="weather-divider-style weather-resume-width-divider-style"/>
                <div  >
                    <Divider style={{ color: "#e4dddd",borderColor: "#e4dddd"}}> Wednesday </Divider>
                </div>
                <ForecastDaysCarouser />
            </div>
        </>
    );
}