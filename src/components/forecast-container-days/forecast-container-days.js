import './forecast-container-days.css';
import daysMock from '../../mock/days-forecast.json'
import ForecastDays from '../forecast-day/forecast-day';
import { Row } from 'antd';
import getDays from "../../services/getDays";
import React, {useEffect, useState} from "react";
import { Link, useHistory} from 'react-router-dom';

function ForecastContainerDays({location, listForecast}){
    const history = useHistory();
    console.log("LOCATION", location)
    /**
     * Initial state
     */
    const [ infoDays, setInfoDays ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ day, setDay ] = useState(false);
    /**
     * Get more recent five days.
     */
    const arrayDays = getDays(listForecast);
    


    useEffect(() => {

        localStorage.removeItem("storeAllDays")    
        localStorage.setItem("storeAllDays",JSON.stringify(listForecast))    
        
        setLoading(true)
        
        console.log('-----------------------', arrayDays);
        setInfoDays(arrayDays)
    return () => setLoading(false)
    
    }, [listForecast]);
    console.log('infoDays', [infoDays,loading])
    return (
        <div className="site-card-wrapper" style={{marginLeft: "22px"}}>
            <Row gutter={3} className="sibling-fade" >
                {
                    infoDays.length === 0 
                    ? <h1>"...cargando"</h1>
                    :
                    infoDays.map((singleDay,index) => 
                        <div>
                            <ForecastDays 
                                key={singleDay.dt} 
                                day={singleDay.dt_txt}
                                maxTemp={singleDay.main.temp_max}
                                minTemp={singleDay.main.temp_min}
                                icon={singleDay.weather[0].icon}
                                location={location}
                            /> 
                        </div>

                    )
                    //}
                }
            </Row>
        </div>
    );
}

export default React.memo(ForecastContainerDays);