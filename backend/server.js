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

// Handle POST requests to /api/weather route
app.post('/api/weather', (req, res) => {

    // Get city name from request body
    const city = req.body.city;

    // Create url for chosen city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios
        .get(url)
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
        .catch(error => {
            // console.log(city, error.response.data.message)
            res.json({
                err: error.response.data.message,
                cod: error.response.data.cod,
            })
        });

    // Format time to 'HH:MM'
    const formatTime = function(unixTimestamp) {
        let date = new Date(unixTimestamp * 1000);
        let hours = date.getHours();
        let minutes = '0' + date.getMinutes();
        return hours + ':' + minutes.slice(-2);
    };
});


// Handle POST requests to /api/forecast route
app.post('/api/forecast', (req, res) => {

    // Get city name from request body
    const city = req.body.city;

    // Create url for chosen city
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    axios
        .get(url)
        .then(response => {
            let forecast = response.data;
            
            let maxTemp = [];
            let minTemp = [];
            let nextDays = [];

            for (i = 0; i < forecast.list.length; i++) {
                if (forecast.list[i].dt % 86400 == 0) {
                    try {
                        nextDays.push(dayOfWeek(forecast.list[i].dt));

                        // Get max temperature for each day
                        let foo = [
                            forecast.list[i].main.temp_max,
                            forecast.list[i+1].main.temp_max,
                            forecast.list[i+2].main.temp_max,
                            forecast.list[i+3].main.temp_max,
                            forecast.list[i+4].main.temp_max,
                            forecast.list[i+5].main.temp_max,
                            forecast.list[i+6].main.temp_max,
                            forecast.list[i+7].main.temp_max
                        ];
                        maxTemp.push(Math.max(...foo));

                        // Get min temperature for each day
                        let bar = [
                            forecast.list[i].main.temp_min,
                            forecast.list[i+1].main.temp_min,
                            forecast.list[i+2].main.temp_min,
                            forecast.list[i+3].main.temp_min,
                            forecast.list[i+4].main.temp_min,
                            forecast.list[i+5].main.temp_min,
                            forecast.list[i+6].main.temp_min,
                            forecast.list[i+7].main.temp_min
                        ]
                        minTemp.push(Math.min(...bar));

                    } catch {
                        break;
                    };
                };
            };

            // post forecast parameters
            res.json({
                maxTemp: maxTemp,
                minTemp: minTemp,
                nextDays: nextDays
            });
        })
        // .catch(error => console.log(error));

    // Return day of a wee from timestamp
    const dayOfWeek = function(unixTimestamp) {
        let days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let date = new Date(unixTimestamp * 1000);
        return days[date.getDay()];
    };
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
// });
  

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});