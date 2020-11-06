

import './home.css';
import { Row } from 'antd';

import weatherReport from "../../assets/img/weatherReport.png"
import { Typography, Divider, Col } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default function AppHome(){
    
    return (
        <>
        <Row>
            <Col span={6} order={4}>
                <img src={weatherReport} alt="weather app" style={{marginLeft: "17%"}}/>
            </Col>
        </Row>
    <Divider style={{color:"white"}}></Divider>
    <Row></Row>
       
        <div>
            <span style={{fontSize:"57px",color: "#2a329e",fontFamily: "Relaway", width:"57px"}}>
            Check the weather of any city in real time.
            </span>
        </div>
        </>
    );
}   