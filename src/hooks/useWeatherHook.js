
import {  useState, useEffect } from "react";
// import weatherContext from "../context/weatherContext";
import { useHistory} from 'react-router-dom';
import getWeatherServices from "../services/getWeatherServices";

export function useWeatherHook(){

    const [dataWeather, setDataWeather ] = useState({});
    const history = useHistory();
    const { pathname } = history.location
    const currentRoute = pathname.split("/")[1];

    useEffect(() => {
        
            let mounted = true;
            getWeatherServices(currentRoute).then(items => {

            if(mounted) {
                setDataWeather( items );
                }
            })
        
        return () => mounted = false;
        
        }, [currentRoute]);

    return { dataWeather }
    }
