import {  useContext } from "react";
import WeatherContext from "../context/weatherContext"
const api = {
    key: "a9748d82dade1958fd30abf90c326c8f",
    base:"https://api.openweathermap.org/data/2.5/"
  }

/**
 * Fetch from Api.
 * 
 * @param {String} location 
 */
export default location => {
    try {
        return fetch(
            `${api.base}forecast?q=${location}&units=metric&appid=${api.key}`,
        ).then(data => data.json()).then(items => {
            return items
        })
        
        
    } catch (ex) {
        return { success: false, error: ex.message };
    }
}
