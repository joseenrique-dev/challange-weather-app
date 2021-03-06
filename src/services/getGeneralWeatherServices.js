
// TODO: save this in .env
const api = {
    key: "0332c433bc40f55007c23970611b4739",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  
/**
 * Fetch from Api.  --> /weather
 * 
 * @param {String} location 
 */
 const getGeneralWeatherServices = location => {
    try {
        
        return fetch(
            `${api.base}weather?q=${location}&units=metric&appid=${api.key}`,
        ).then(data => data.json()).then(items => {
            return items
        })
        
    } catch (ex) {
        return { success: false, error: ex.message };
    }
}

export default getGeneralWeatherServices;