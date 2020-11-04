import "./forecast-days-carouser.css";
import { Carousel } from 'antd';
import dayDescriptionMock from '../../mock/hour-by-day.json';
import ForecastDescriptionDay from '../forecast-description-day/forecast-description-day';
export default function ForecastDaysCarouser(){
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    {/* afterChange={onChange} */}
    const { forecastByHour } = dayDescriptionMock.days[0]
    return (
        <div>
            <Carousel  >    
                
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    );
}

function onChange(a, b, c) {
    console.log(a, b, c);
  }