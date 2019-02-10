const {argv} = require('./config/yargs');
const place = require('./place/place');
const weather = require('./weather/weather');
let location = encodeURI(argv.direction);

//axios.request('https://pokeapi.co/')

let getInfoweather = async() =>{
    try {
        let coords =  await place.getPlaceAndCoors(location);
        let clim = await weather.getWeather(coords.lat , coords.lng);
        return `la temperatura es: ${clim.data.main.temp}`
    } catch (error) {
        return `Error - No se pudo determinar el clima en ${location}`;
    }
   
}


getInfoweather().then(
    resp => console.log(resp)
).catch(err => console.log(err));

/*
place.getPlaceAndCoors(location)
.then(resp =>{ 
    return weather.getWeather(resp.lat , resp.lng);
})
.then(respW => { 
   console.log(respW.data.main.temp);
})
.catch(err => console.log(err));
*/
///onsole.log(argv);