const axios = require("axios");
const url = 'https://covid19.mathdro.id/api';

function fetchData() {
const data = axios.get(`${url}/confirmed`);
        return Promise.all([data]).then(function(confirmed){
            return confirmed;
        })
    }

export default async function handlePlaces(){
    const confirmed = fetchData();
    const data = await Promise.resolve(confirmed).then(function(result){
        const [value] = result;
        return value.data;
    })
    const topTen = data.slice(0,10);
    return topTen;
    
}


