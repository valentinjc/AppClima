const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9cdc14fa1dea42d577196694f73687a5&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}