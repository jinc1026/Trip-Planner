// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8082;

app.listen(port,()=>{
	console.log(`Connected to local server: Port ${port}`);
});

app.get("/", (req,res)=>{
	res.send("connected to the server");
});

//GET route that returns the projectData object in the server code
app.get("/recent", (req,res)=>{
	console.log("---recent called---");
	res.send(projectData);
});

//POST route that adds incoming data to projectData
app.post("/add", (req,res)=>{
	console.log("---add called---");
	projectData.date = req.body.date;
	projectData.city = req.body.city;
	projectData.country = req.body.country;
	projectData.weather = req.body.weather;
	projectData.temp = req.body.temp;
	projectData.precip = req.body.precip;
	projectData.rh = req.body.rh;
	projectData.wind_spd = req.body.wind_spd;
	
	console.log("projectData has been updated with new trip destination info: ");
	console.log(projectData);
	res.send(projectData);
});