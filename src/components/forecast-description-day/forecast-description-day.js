import "./forecast-description-day.css";
import { Col, Descriptions, Divider, Row } from 'antd';

export default function ForecastDescriptionDay({hour,icon, temp}){
    return (
        <>
        <Row>
            <Col span={12}>col-12</Col>
                <Divider type="vertical" />
            <Col span={12}>col-12</Col>
        </Row>
        {/* <Descriptions title={hour}>
            <Descriptions.Item >{icon}</Descriptions.Item>
            <Descriptions.Item >{temp}</Descriptions.Item>
        </Descriptions> */}
        </>
    );
}