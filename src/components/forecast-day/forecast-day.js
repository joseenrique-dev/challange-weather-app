import './forecast-day.css';
import { Card } from 'antd';
import { Col } from 'antd';
import getStrDay from "../../utils/getStrDay"
import { Link } from 'react-router-dom';


//{day = "", maxTemp= "", minTemp= "", iconTemp= "" }
export default function ForecastDays(
    {  day = "", maxTemp= "", minTemp= "", icon= "", location }){
    const { Meta } = Card;
    let urlIcon = `http://openweathermap.org/img/wn/${ icon }@2x.png`
    const dayOfWeek = new Date(day)
    const selectedDate = day.split(" ")[0]
    localStorage.setItem("selectedDateToSearch",selectedDate)
    
    return (
        <div >
            <Link to={`/${location}/${getStrDay(dayOfWeek.getDay()).toLowerCase()}`} >
                <Col className="box" span={6} style={{display: "inline-table"}}>
                    <Card  size="small" bordered={false} className="weather-box-style" >
                    <Meta title={getStrDay(dayOfWeek.getDay())} description={selectedDate} className="weather-meta-style"/>
                    <div className="weather-icon-container">
                        <img src={urlIcon} alt="weather icon" className="weather-icon-style"/>
                    </div>                
                    <span>{maxTemp} °C</span>
                    <span>{minTemp} °C</span>
                    </Card>
                </Col>
            </Link>
        </div>
    );
}