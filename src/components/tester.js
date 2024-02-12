const axios = require('axios').default;



axios.get('https://api.open-meteo.com/v1/forecast?latitude=51.77&longitude=55.10&hourly=temperature_2m')
    .then(response => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error)
    })