import "./forecast-days-carouser.css";
import {  Carousel } from 'antd';
import { Col, Divider, Row } from 'antd';
import getHoursByDate from "../../services/getHoursByDate"
import ChartHours from "../chart-hours/chart-hours"
import getDays from '../../services/getDays';

export default function ForecastDaysCarouser({props}){
    
    const contentStyle = {
        height: '160px',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,.05)',
        borderRadius: '6px',
        display: 'flex'
    };
    
    const listSelectedHours = getHoursByDate();
    
    return (
        <div>
            <Divider orientation="left" style={{color:"white"}}>Forecast by hours of the selected day</Divider>
            <Carousel autoplay>    
                
                {/* Element #1 */}
                <div>
                    <div style={contentStyle}>
                        <Row style={{padding:"3%"}}>
                            <Col span={7} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                                
                            </Col>
                            <Col span={5} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }} style={{left:"25%"}}>
                                <div >Hours: {listSelectedHours[0].dt_txt.split(" ")[1]} </div>
                            </Col>
                            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }} style={{display:"contents"}}>
                                <div display={{marginTop: "36%",marginLeft: "5%"}}>
                                    <div >Max: {listSelectedHours[0].main.temp_max} °C</div>
                                    <div >Min:{listSelectedHours[0].main.temp_min} °C</div>
                                </div>
                            </Col>
                            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }} style={{left:"13%"}}>
                                <div style={{fontFamily: "monospace"}}>{listSelectedHours[1].main.temp} °C</div>
                                <div >
                                <img  style={{ marginLeft: "-64%",width: "250%",marginTop: "-51%"}} src={`http://openweathermap.org/img/wn/${ listSelectedHours[0].weather[0].icon }@2x.png`} alt="weather icon" />
                                </div>
                            </Col>
                        </Row>
                            <div className="weather-divider-style"></div>
                            <Row style={{padding:"3%"}}>
                            <Col span={7} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                                
                            </Col>
                            <Col span={5} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }} style={{left:"25%"}}>
                                <div >Hours: {listSelectedHours[1].dt_txt.split(" ")[1]} </div>
                            </Col>
                            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }} style={{display:"contents"}}>
                                <div display={{marginTop: "36%",marginLeft: "5%"}}>
                                    <div >Max: {listSelectedHours[1].main.temp_max} °C</div>
                                    <div >Min:{listSelectedHours[1].main.temp_min} °C</div>
                                </div>
                            </Col>
                            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }} style={{left:"13%"}}>
                                <div style={{fontFamily: "monospace"}}>{listSelectedHours[1].main.temp} °C</div>
                                <div >
                                <img  style={{ marginLeft: "-64%",width: "250%",marginTop: "-51%"}} src={`http://openweathermap.org/img/wn/${ listSelectedHours[1].weather[0].icon }@2x.png`} alt="weather icon" />
                                </div>
                            </Col>
                        </Row>
                        
                    </div>
                </div>
                {/* Element #2 */}
                <div>
                    <div style={contentStyle}>
                        <Row style={{padding:"3%"}}>
                            <Col span={7} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                                
                            </Col>
                            <Col span={5} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }} style={{left:"25%"}}>
                                <div >Hours: {listSelectedHours[2].dt_txt.split(" ")[1]} </div>
                            </Col>
                            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }} style={{display:"contents"}}>
                                <div display={{marginTop: "36%",marginLeft: "5%"}}>
                                    <div >Max: {listSelectedHours[2].main.temp_max} °C</div>
                                    <div >Min:{listSelectedHours[2].main.temp_min} °C</div>
                                </div>
                            </Col>
                            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }} style={{left:"13%"}}>
                                <div style={{fontFamily: "monospace"}}>{listSelectedHours[2].main.temp} °C</div>
                                <div >
                                <img  style={{ marginLeft: "-64%",width: "250%",marginTop: "-51%"}} src={`http://openweathermap.org/img/wn/${ listSelectedHours[2].weather[0].icon }@2x.png`} alt="weather icon" />
                                </div>
                            </Col>
                        </Row>
                            <div className="weather-divider-style"></div>
                            <Row style={{padding:"3%"}}>
                            <Col span={7} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                                
                            </Col>
                            <Col span={5} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }} style={{left:"25%"}}>
                                <div >Hours: {listSelectedHours[3].dt_txt.split(" ")[1]} </div>
                            </Col>
                            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }} style={{display:"contents"}}>
                                <div display={{marginTop: "36%",marginLeft: "5%"}}>
                                    <div >Max: {listSelectedHours[3].main.temp_max} °C</div>
                                    <div >Min:{listSelectedHours[3].main.temp_min} °C</div>
                                </div>
                            </Col>
                            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }} style={{left:"13%"}}>
                                <div style={{fontFamily: "monospace"}}>{listSelectedHours[3].main.temp} °C</div>
                                <div >
                                <img  style={{ marginLeft: "-64%",width: "250%",marginTop: "-51%"}} src={`http://openweathermap.org/img/wn/${ listSelectedHours[3].weather[0].icon }@2x.png`} alt="weather icon" />
                                </div>
                            </Col>
                        </Row>
                        
                    </div>
                </div>
                {/* Element #3 */}
                <div>
                    <div style={contentStyle}>
                        <Row style={{padding:"3%"}}>
                            <Col span={7} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                                
                            </Col>
                            <Col span={5} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }} style={{left:"25%"}}>
                                <div >Hours: {listSelectedHours[4].dt_txt.split(" ")[1]} </div>
                            </Col>
                            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }} style={{display:"contents"}}>
                                <div display={{marginTop: "36%",marginLeft: "5%"}}>
                                    <div >Max: {listSelectedHours[4].main.temp_max} °C</div>
                                    <div >Min:{listSelectedHours[4].main.temp_min} °C</div>
                                </div>
                            </Col>
                            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }} style={{left:"13%"}}>
                                <div style={{fontFamily: "monospace"}}>{listSelectedHours[4].main.temp} °C</div>
                                <div >
                                <img  style={{ marginLeft: "-64%",width: "250%",marginTop: "-51%"}} src={`http://openweathermap.org/img/wn/${ listSelectedHours[4].weather[0].icon }@2x.png`} alt="weather icon" />
                                </div>
                            </Col>
                        </Row>
                            <div className="weather-divider-style"></div>
                            <Row style={{padding:"3%"}}>
                            <Col span={7} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                                
                            </Col>
                            <Col span={5} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }} style={{left:"25%"}}>
                                <div >Hours: {listSelectedHours[5].dt_txt.split(" ")[1]} </div>
                            </Col>
                            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }} style={{display:"contents"}}>
                                <div display={{marginTop: "36%",marginLeft: "5%"}}>
                                    <div >Max: {listSelectedHours[5].main.temp_max} °C</div>
                                    <div >Min:{listSelectedHours[5].main.temp_min} °C</div>
                                </div>
                            </Col>
                            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }} style={{left:"13%"}}>
                                <div style={{fontFamily: "monospace"}}>{listSelectedHours[5].main.temp} °C</div>
                                <div >
                                <img  style={{ marginLeft: "-64%",width: "250%",marginTop: "-51%"}} src={`http://openweathermap.org/img/wn/${ listSelectedHours[5].weather[0].icon }@2x.png`} alt="weather icon" />
                                </div>
                            </Col>
                        </Row>
                        
                    </div>
                </div>
            </Carousel>
            <Divider orientation="left" style={{color:"white"}}>Forecast Chart</Divider>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.05)",borderRadius: "6px", padding: "3%"}}>
            
                <ChartHours generalData={listSelectedHours}/>
            </div>
        </div>

    );
}
