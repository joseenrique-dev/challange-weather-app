import React, { useState } from 'react';

const Context = React.createContext({});

export function WeatherContextProvider({children}){
    
    const [dataWeather, setDataWeather ] = useState({});

    return <Context.Provider value={{dataWeather, setDataWeather}}>
        { children }
    </Context.Provider>
}
export default Context;