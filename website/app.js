/* Global Variables */
// Web API URL and apiKey info
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
const openWeatherCoordinateUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
const apiKey = "&limit=1&appid=eb5a120ff7fc79e89928882f7c56d924";

const weatherBitBaseUrlCurrent ="https://api.weatherbit.io/v2.0/current?lat=";
const weatherBitBaseUrlForecast = "https://api.weatherbit.io/v2.0/forecast/daily?lat=";
const weatherBitKey = "&key=c086327b5e2345ddb6a22055e7e275a8";

// const geonamesKey = "&username=jinc1026";


// Create a new date instance dynamically with JS
let d = new Date();
let currentDate = new Date().toISOString().slice(0, 10);
document.getElementById("departureDate").setAttribute("min",currentDate);

// Add an event listener to the generate button to start async function to get weather info
document.getElementById("generate").addEventListener("click", weatherInfoStartCallBack);

let latitude = "";
let longitude ="";


async function weatherInfoStartCallBack(){
	// Retreive the city name that user typed in
	const location = document.getElementById("location").value;
	
	// Calculate the number of days between Today's date and departure date
	// If the departure date is further than a week, show forecast weather instead of current
	const departureDate = document.getElementById("departureDate").value;
	const date1 = new Date(currentDate);
	const date2 = new Date(departureDate);
	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
		
	const coordinates = await getCoordinateInfo(location);
	if (coordinates[0] !== undefined){
		if(departureDate === ""){
			document.getElementById("error").innerHTML = "Please set your departure date correctly";
			clearUIdata();
		} else {
			if (diffDays<7){
				const weather = await getWeatherInfo(coordinates[0]);

				// Post the weather info on the server's projectData
				await postWeatherInfo("/add",{
					date: departureDate,
					city: weather.data[0].city_name,
					country: weather.data[0].country_code,
					weather: weather.data[0].weather.description,
					temp: weather.data[0].temp,
					precip: weather.data[0].precip,
					rh: Math.round(weather.data[0].rh*10)/10,
					wind_spd: Math.round(weather.data[0].wind_spd*10)/10,
				}).then(function(postResponse){
						// Retreive the most recent weather info and upate UI
							updateUI();
				});

			} else {
				const weather = await getForecastWeatherInfo(coordinates[0]);
				console.log(weather);

				// Post the weather info on the server's projectData
				await postWeatherInfo("/add",{
					date: departureDate,
					city: weather.city_name,
					country: weather.country_code,
					weather: weather.data[0].weather.description,
					temp: weather.data[0].temp,
					precip: weather.data[0].precip,
					rh: Math.round(weather.data[0].rh*10)/10,
					wind_spd: Math.round(weather.data[0].wind_spd*10)/10,
				}).then(function(postResponse){
						// Retreive the most recent weather info and upate UI
							updateUI();
				});			
			}
		}

	}
};

const getCoordinateInfo = async function(location){
	const coordinateResponse = await fetch(openWeatherCoordinateUrl + location + apiKey);

	if (!coordinateResponse.ok) {
		//Things to be done if the response is bad
		document.getElementById("error").innerHTML = "Incorrect city name! Please double check the city name";
		clearUIdata();
		throw new Error("Bad response from server. Fail to get coordinate info");
	};

	try {
		const coordinateData = await coordinateResponse.json();
		return coordinateData;
	} catch(error) {
		console.log(`Error: ${error}`);
	}
};

const getWeatherInfo = async function(coordinates){
	const weatherResponse = await fetch(weatherBitBaseUrlCurrent + coordinates.lat.toString() + "&lon=" + coordinates.lon.toString() + weatherBitKey);
	
	if(!weatherResponse.ok){
		document.getElementById("error").innerHTML = "Unable to get weather info. Check latitude and longitude info";
		throw new Error("Bad response from server. Fail to get weather info");
	}
	
	try {
		const weatherData = await weatherResponse.json();
		return weatherData;
	} catch (error){
		console.log(`Error: ${error}`);
	}
	
};

const getForecastWeatherInfo = async function(coordinates){
	const weatherResponse = await fetch(weatherBitBaseUrlForecast + coordinates.lat.toString() + "&lon=" + coordinates.lon.toString() + weatherBitKey);
	
	if(!weatherResponse.ok){
		document.getElementById("error").innerHTML = "Unable to get weather info. Check latitude and longitude info";
		throw new Error("Bad response from server. Fail to get weather info");
	}
	
	try {
		const weatherData = await weatherResponse.json();
		return weatherData;
	} catch (error){
		console.log(`Error: ${error}`);
	}
	
};



const postWeatherInfo = async function(url="", data={}){
	const response = await fetch(url, {
			method: 'POST', 
			credentials: 'same-origin',
			headers: {
				 'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});	
	
	try {	
		const newData = await response.json();
		return newData;
	} catch (error){
		console.log("Error", error);
	}
};

const updateUI = async function(){
	const request = await fetch("/recent");

	try {
		const recentEntry = await request.json();
		console.log(recentEntry);
		document.getElementById("date").innerHTML = `Departure Date: ${recentEntry.date}`;
		document.getElementById("city").innerHTML = `City: ${recentEntry.city}`;
		document.getElementById("country").innerHTML = `Country: ${recentEntry.country}`;
		document.getElementById("weather").innerHTML = `Weather: ${recentEntry.weather}`;
		document.getElementById("temp").innerHTML = `Temperature(C): ${recentEntry.temp}`;
		document.getElementById("precip").innerHTML = `Precipitation(mm/hr): ${recentEntry.precip}`;
		document.getElementById("rh").innerHTML = `Relative Humidity(%): ${recentEntry.rh}`;
		document.getElementById("wind_spd").innerHTML = `Wind Speed(m/s): ${recentEntry.wind_spd}`;
		document.getElementById("error").innerHTML = "";
	} catch (error) {
		console.log("Error", error);
	}
}

const clearUIdata = function(){
	document.getElementById("date").innerHTML = "";
	document.getElementById("city").innerHTML = "";
	document.getElementById("country").innerHTML = "";
	document.getElementById("weather").innerHTML = "";
	document.getElementById("temp").innerHTML = "";
	document.getElementById("precip").innerHTML = "";
	document.getElementById("rh").innerHTML = "";
	document.getElementById("wind_spd").innerHTML = "";
}