


export default listForecast => {
    let arrayDays = []
    if( listForecast.length != 0 ){
        let lastDate = listForecast[0].dt_txt.split(" ")[0]
        
        for(let i = 0; i < listForecast.length; i++){
            let value = listForecast[i];
            let realTime = value.dt_txt.split(" ")[0];

            if( i === 0) arrayDays.push(value);
            if(arrayDays.length === 5) break;
            if( realTime !== lastDate  ){
                arrayDays.push(value)
                lastDate = realTime
            }
            
        }
    }
    localStorage.removeItem("arrayDays");
    
    return arrayDays;
}
