const axios = require('axios');
/// https://openweathermap.org/current get a apikey
let apiKey = 'b784c68c8ba5cf1e51ac0752b31f4e2d';
const getWeather = async (lat , lng) => {
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
    let resp = await  axios.get(urlWeather);
    return resp
}

module.exports = {
    getWeather
}