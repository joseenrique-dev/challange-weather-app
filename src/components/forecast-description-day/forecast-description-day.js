import "./forecast-description-day.css";
import { Descriptions } from 'antd';

export default function ForecastDescriptionDay({hour,icon, temp}){
    return (
        <>
        <Descriptions title={hour}>
            <Descriptions.Item >{icon}</Descriptions.Item>
            <Descriptions.Item >{temp}</Descriptions.Item>
        </Descriptions>
        </>
    );
}