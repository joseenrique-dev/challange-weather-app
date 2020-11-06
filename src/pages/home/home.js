

import './home.css';
import { Row } from 'antd';

import weatherReport from "../../assets/img/weatherReport.png"
import { Divider, Col } from 'antd';


export default function AppHome(){
    
    return (
        <>
        <Row>
            <Col span={6} order={4}>
                <div className="weather-div-img">
                    <img src={weatherReport} alt="weather app" className="weather-img"/>
                </div>
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