
import getWeatherServices from "../../services/weather.services";
import { useEffect, useState } from "react";

function useWeather({ location } = { location : null } ){

    const [ loading, setLoading ] = useState(false);
    const [ dataWeather, setDataWeather ] = useState({});
    useEffect(() => {
        debugger
        setLoading(true);
        getWeatherServices({ location })
            .then(data =>{
                setLoading(false);
                console.log('DATA-->', data);
                setDataWeather(data)
            });
    
        return {loading, dataWeather}
    }, [location]);
}
