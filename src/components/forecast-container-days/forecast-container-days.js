import './forecast-container-days.css';
import daysMock from '../../mock/days-forecast.json'
import ForecastDays from '../forecast-day/forecast-day';
import { Row } from 'antd';
export default function ForecastContainerDays(){

    console.log('Daysss',daysMock)
    return (
        <div className="site-card-wrapper" style={{marginLeft: "22px"}}>
            <Row gutter={3} className="sibling-fade">
                {
                    daysMock.days.map((singleDay,index) => 
                        <ForecastDays 
                            key={singleDay.id} 
                            day={singleDay.name}
                            maxTemp={singleDay.dataForecast[0].maxTemp}
                            minTemp={singleDay.dataForecast[0].minTemp}
                            icon={singleDay.dataForecast[0].icon}
                        /> 
                    )
                }
            </Row>
        </div>
    );
}