const axios = require('axios').default;
// import axios from "axios";
const tester = () => {
    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=51.77&longitude=55.13&hourly=temperature_2m&current_weather=true`)
        .then(response => {
            console.log(response.data);
            const weather =  response.data;
            return weather;
        })

}

// console.log(tester())
tester()

