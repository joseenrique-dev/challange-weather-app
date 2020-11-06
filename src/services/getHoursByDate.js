
/**
 * Search in list of date to find the selected day.
 */
export default () => {
    let resultDay = []
    //return listOfDate.find(data => data.dt_txt.split(" ")[0] === selectedDate);

    let selectedDate = localStorage.getItem("selectedDateToSearch")
    let listOfDate = JSON.parse(localStorage.getItem("storeAllDays"))
    listOfDate.forEach(function(element) {
        if( element.dt_txt.split(" ")[0] === selectedDate ){
            resultDay.push(element);
        }   
    });
    return resultDay;
}
