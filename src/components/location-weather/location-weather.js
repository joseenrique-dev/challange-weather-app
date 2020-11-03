import { EnvironmentOutlined } from '@ant-design/icons';
import './location-weather.css';
import { Divider } from 'antd';

export default function LocationWeather(){

    const dateBuilder =(d) =>{
        let months = ["Juanuary","February","March","April",
                      "May","Jun","July","August","September","October","November","December"];
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let seconds = d.getSeconds();


        return [
            `${day} ${date} ${month} ${year}`,
            `${hour} : ${minute} ${seconds}`
        ]
    }
    return (
        <>
            <div className="weather-location-display">

                <EnvironmentOutlined style={{color:'#ffffffad',fontSize:'40px'}}/>
                <span className="weather-info-style">The Havana </span>
                <span className="weather-date-style">{dateBuilder(new Date())[0]}</span>   
                <span className="weather-date-style">{dateBuilder(new Date())[1]}</span>   
           </div>
        </>
    );
}