const axios = require('axios');

const YOU_API_KEY = 'AIzaSyBcOlNFYqn6XysUSHdb8-cLS-sLSWb0D1A';


getPlaceAndCoors = async (direction) => {
    let urlapi= `https://maps.googleapis.com/maps/api/geocode/json?address=${direction}&key=${YOU_API_KEY}`
    let resp = await axios.get(urlapi);
    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`Invalid Direction ${direction}`);
    }
    let location = resp.data.results[0].formatted_address;
    let coors = resp.data.results[0].geometry.location;
     

    return {
        direction: location,
        lat:coors.lat,
        lng:coors.lng
    }
}

module.exports = {
    getPlaceAndCoors
}