import './forecast-container-days.css';
import ForecastDays from '../forecast-day/forecast-day';
import { Row } from 'antd';
import getDays from "../../services/getDays";
import React, {useEffect, useState} from "react";

function ForecastContainerDays({location, listForecast}){
    
    /**
     * Initial state
     */
    const [ infoDays, setInfoDays ] = useState([]);
    
    useEffect(() => {
        /**
         * Get more recent five days.
         */
        const arrayDays = getDays(listForecast);

        localStorage.removeItem("storeAllDays")    
        localStorage.setItem("storeAllDays",JSON.stringify(listForecast))    
        setInfoDays(arrayDays)
    }, [listForecast]);
    
    return (
        <div className="site-card-wrapper" style={{marginLeft: "22px"}}>
            <Row gutter={3} className="sibling-fade" >
                {
                    infoDays.length === 0 
                    ? <h1>"Loading ..."</h1>
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
                }
            </Row>
        </div>
    );
}

export default React.memo(ForecastContainerDays);