const api = {
    key: "a9748d82dade1958fd30abf90c326c8f",
    base:"https://api.openweathermap.org/data/2.5/"
  }

export default function  getWeatherServices({location}) {
    try {
        debugger
        
        return fetch(
            `${api.base}weather?q=${location}&appid=${api.key}&units=metric`,
        )
        .then(res => res.json())
        .then(result => {
            return result
        })

        
    } catch (ex) {
        return { success: false, error: ex.message };
    }
}