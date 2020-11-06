
import './forecast-resume.css';
import firstLetCap from "../../utils/firstCapitalLetter"

export default function ForecastResume( {resumeDescription, main, icon} ){

    return (
        <>
            <div className="weather-location-display">
                <div className="weather-icon-container">
                    <img src={icon} alt="weather icon" className="weather-icon-style"/>
                </div>
                <span className="weather-info-style weather-forecast-general-information">{firstLetCap(resumeDescription)}</span><br />
                <span className="weather-forecast-temp">{main} °C</span>
            </div>
        </>

    );
}
