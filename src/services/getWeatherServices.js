import {  useContext } from "react";
import WeatherContext from "../context/weatherContext"
const api = {
    key: "a9748d82dade1958fd30abf90c326c8f",
    base:"https://api.openweathermap.org/data/2.5/"
  }


export default location => {
    try {
        return fetch(
            `${api.base}forecast?q=${location}&appid=${api.key}`,
        ).then(data => data.json()).then(items => {
            return items
        })
        
        // if( result.status === 200){
        //     return { success: true, data: await result.json() }
        // }

        // return { success: false, data: result.statusText }
        
    } catch (ex) {
        return { success: false, error: ex.message };
    }
}
