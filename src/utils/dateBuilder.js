export default function dateBuilder(d){
    let months = ["Juanuary","February","March","April",
                  "May","Jun","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let seconds = d.getSeconds();


    return [
        `${day} ${date} ${month} ${year}`,
        `${hour} : ${minute} ${seconds}`
    ]
}