// Required dependencies
const path = require('path');
const express = require('express');
const bp = require('body-parser');
const app = express();
const axios = require('axios');

// Dotenv package
require('dotenv').config();

// Port number
const PORT = process.env.PORT || 3001;

// Openweathermap api key
const apiKey = `${process.env.API_KEY}`;

// Middleware
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


// Have Node serve the files for built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Handle POST requests to /api/data route
app.post('/api/data', (req, res) => {

    // Get city name from request body
    const city = req.body.city;

    // Create url for chosen city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(url)
        .then(response => {
            let weather = response.data;
            // post weather parameters
            res.json({ 
                place: `${weather.name}, ${weather.sys.country}`,
                description: `${weather.weather[0].description}`,
                icon: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                temp: `${Math.round(weather.main.temp)}`,
                sensed: `${Math.round(weather.main.feels_like)}`,
                min: `${Math.round(weather.main.temp_min)}`,
                max: `${Math.round(weather.main.temp_max)}`,
                sunrise: `${formatTime(weather.sys.sunrise + weather.timezone)}`,
                sunset: `${formatTime(weather.sys.sunset + weather.timezone)}`,
                wind: `${Math.round(weather.wind.speed * 10) / 10}`,
                cloudiness: `${weather.clouds.all}`,
                pressure: `${Math.round(weather.main.pressure)}`,
                humidity: `${weather.main.humidity}`
            });
        })
        .catch(error => console.log(error))

    // Format date to 'DD-MM-YYYY'
    const formatTime = function(unixTimestamp) {
        let date = new Date(unixTimestamp * 1000);
        let hours = date.getHours();
        let minutes = '0' + date.getMinutes();
        return hours + ':' + minutes.slice(-2);
    };
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
// });
  

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});



/*

if (weather.main == undefined) {
    // Render if city doesn't exist in db
    res.json({
        weather: null,
        place: `\xa0\xa0${req.body.city} doesn't exist`,
    });
} else {
    // Format date to 'DD-MM-YYYY'
    const formatTime = function(unixTimestamp) {
        let date = new Date(unixTimestamp * 1000);
        let hours = date.getHours();
        let minutes = '0' + date.getMinutes();
        return hours + ':' + minutes.slice(-2);
    }

    // Create weather parameters
    let place = `${weather.name}, ${weather.sys.country}`,
        description = `${weather.weather[0].description}`,
        icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
        temp = `${Math.round(weather.main.temp)}`,
        sensed = `${Math.round(weather.main.feels_like)}`,
        min = `${Math.round(weather.main.temp_min)}`,
        max = `${Math.round(weather.main.temp_max)}`,
        sunrise = `${formatTime(weather.sys.sunrise + weather.timezone)}`,
        sunset = `${formatTime(weather.sys.sunset + weather.timezone)}`,
        wind = `${Math.round(weather.wind.speed * 10) / 10}`,
        cloudiness = `${weather.clouds.all}`,
        pressure = `${Math.round(weather.main.pressure)}`,
        humidity = `${weather.main.humidity}`;

    // Render view with weather parameters
    res.json({
        weather: weather,
        place: place,
        description: description,
        icon: icon,
        temp: temp,
        sensed: sensed,
        min: min,
        max: max,
        sunrise: sunrise,
        sunset: sunset,
        wind: wind,
        cloudiness: cloudiness,
        pressure: pressure,
        humidity: humidity,
    });
};

*/