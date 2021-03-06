

/**
 * Build the respective data [x,y] to display in chart.
 * 
 * @param {[Object]} listSelectedHours 
 */
const buildChart = listSelectedHours => {
    let infoToDisplay = []
    if( listSelectedHours.length !== 0 ){
        listSelectedHours.forEach(item => {
            infoToDisplay.push(
                {
                    hour: item.dt_txt.split(" ")[1],
                    temp: item.main.temp
                }
            )
        });
        
    }
    
    return infoToDisplay;
}

export default buildChart;