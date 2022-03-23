// Web API URL and apiKey info
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
const openWeatherCoordinateUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
const apiKey = "&limit=1&appid=eb5a120ff7fc79e89928882f7c56d924";

const weatherBitBaseUrlCurrent ="https://api.weatherbit.io/v2.0/current?lat=";
const weatherBitBaseUrlForecast = "https://api.weatherbit.io/v2.0/forecast/daily?lat=";
const weatherBitKey = "&key=c086327b5e2345ddb6a22055e7e275a8";

const geonamesKey = "&username=jinc1026";

const pixabayUrl = "https://pixabay.com/api/?";
const pixabayKey = "key=26197022-380369692144c45e27439b513";

export {baseUrl, openWeatherCoordinateUrl, apiKey, weatherBitBaseUrlCurrent, weatherBitBaseUrlForecast, weatherBitKey,
			geonamesKey, pixabayKey, pixabayUrl}