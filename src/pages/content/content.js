import getWeatherServices from "../../services/getWeatherServices";
import "./content.css";
import LocationWeather from "../../components/location-weather/location-weather"
import ForecastResume from '../../components/forecast-resume/forecast-resume';
import ForecastContainerDays from '../../components/forecast-container-days/forecast-container-days';
import { Divider, Skeleton } from 'antd';
import ForecastDaysCarouser from '../../components/forecast-days-carouser/forecast-days-carouser';
import { useHistory} from 'react-router-dom';
import React, { useState, useEffect} from "react";
import ErrorNotFound from '../../components/errors/error-404';


function AppContent( locationRout ){
    
    /** 
     * Use State Definitions
    */
    const [ cityName, setCityName ] = useState("...");
    const [ weatherDescription, setWeatherDescription ] = useState("...");
    const [ mainWeather, setMainWeather ] = useState("...");
    const [ icon, setIcon ] = useState("");
    const [ listForecast, setlistForecast ] = useState([]);
    const [ showContinerByHours, setShowContinerByHours ] = useState(false);
    const [ errorNotFound, setErrorNotFound ] = useState(false);
    
    //Handle route
    let currentRoute 
    const history = useHistory();
    const { pathname } = history.location
    const pathNameArr = pathname.split("/")
    const [ loading, setLoading ] = useState(false);
    pathNameArr.length === 3 ? setShowContinerByHours(true) : currentRoute = pathNameArr[1]


    useEffect(() => {
        
        let mounted = true;
        setLoading(true)
        getWeatherServices(currentRoute).then(data =>{
            
            if( data.cod   === "200"){
                setLoading(false)
                if(mounted) {
                    console.log('Api Data  DAYSS', data.list)                
                    const weather = data.list[0].weather[0];
                    setCityName(data.city.name);
                    setWeatherDescription(weather.description);
                    setMainWeather(data.list[0].main.temp)
                    let urlIcon = `http://openweathermap.org/img/wn/${ weather.icon }@2x.png`
                    setIcon(urlIcon);
                    const jsonTransform = data.list.slice(0,50)//JSON.stringify(data.list.slice(0,25))
                    console.log(jsonTransform)
                    setlistForecast(jsonTransform)
                }
            }else if (data.cod   === "404"){
                setErrorNotFound(true);
            }
            
        })        
    
    return () => mounted = false;
    }, [currentRoute]);
    
    
    return (
        <> 
        {
            !errorNotFound ? ( 
                <Skeleton loading={loading}>
                    <LocationWeather city={cityName} />
                    <div className="weater-minor-div-divider">
                        <Divider className="weater-minor-separator-divider"/>     
                    </div>
                    <ForecastResume resumeDescription={weatherDescription} main={mainWeather} icon={icon}/>
                    <div className="weater-minor-big-div-divider">
                        <Divider className="weater-minor-separator-divider"/>     
                    </div>
                    <ForecastContainerDays 
                        location={currentRoute}
                        listForecast={listForecast}
                    /> 
                    {
                        showContinerByHours ?
                        <div>
                            <div>
                                <Divider style={{ color: "#e4dddd",borderColor: "#e4dddd"}}> Wednesday </Divider>
                            </div>
                            <ForecastDaysCarouser />

                        </div>
                        : ''
                    }               
                </Skeleton>
            ) :
            <ErrorNotFound />
        }
        </>
    );
}

export default React.memo(AppContent);