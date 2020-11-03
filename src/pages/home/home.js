
import './home.css';
import LocationWeather from "../../components/location-weather/location-weather"
export default function AppHome(){

    return (
        <>
            <div className="site-layout-background weather-home-distribution weather-home-visual-style" >
            <LocationWeather />
            </div>
        </>
    );
}