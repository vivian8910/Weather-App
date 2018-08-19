export async function getWeather(cityname) {
    try {
        const weather = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${cityname}') and u='c'&format=json`)
        const response = await weather.json();
        const forecast = await response.query.results.channel.item.forecast; 
        return forecast;    
    } catch(error) {
        console.warn(error.message);
        return null;
    } 
}