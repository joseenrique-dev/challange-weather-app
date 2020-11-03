import './forecast-day.css';
import { Card } from 'antd';
import { Col } from 'antd';


//{day = "", maxTemp= "", minTemp= "", iconTemp= "" }
export default function ForecastDays({day = "", maxTemp= "", minTemp= "", icon= "" }){
    const { Meta } = Card;
    return (
        <div >
            <Col className="box" span={6} style={{display: "inline-table"}}>
                <Card  size="small" bordered={false} className="weather-box-style" >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                <span>{day}</span><br/>
                <span>{icon}</span><br/>
                <span>{maxTemp} °C</span>
                <span>{minTemp} °C</span>
                </Card>
            </Col>
        </div>
    );
}