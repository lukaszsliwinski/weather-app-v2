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
    let city = req.body.city;

    // Create urls for chosen city
    let weatherRequest = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    let forecastRequest = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);

    axios
        .all([weatherRequest, forecastRequest])
        .then(axios.spread((weatherResponse, forecastResponse) => {
            // Get current weather data
            // https://openweathermap.org/current
            let weather = weatherResponse.data;
            // Get weather forecast data
            let forecast = forecastResponse.data;

            let maxTemp = [];
            let minTemp = [];
            let nextDays = [];

            /*
            Prepare forecast data: min and max temperature for next 4 days
            The response provides forecast for nest 5 days every three hours
            https://openweathermap.org/forecast5
            */
            let nowPlusTimezone = weather.dt + weather.timezone;
            // let currentDateTime = moment(nowPlusTimezone).format('dd-MM-YYYY hh:mm')
            for (i = 0; i < forecast.list.length; i++) {
                /*
                Handle first hour in every day
                It could be from 0:00 to 2:45 depending on the timezone
                */
                let dtPlusTimezone = forecast.list[i].dt + forecast.city.timezone;
                if (
                    dayOfWeek(nowPlusTimezone) != dayOfWeek(dtPlusTimezone) &&
                    (dtPlusTimezone % 86400 >= 0 && dtPlusTimezone % 86400 <= 9900)     // Check the rest of division - 0 is 0:00, 9900 is 2:45
                    ) {
                    try {
                        // Push name of next day to the list
                        nextDays.push(dayOfWeek(dtPlusTimezone));

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

            // post weather and forecast parameters
            res.json({
                // now: `${currentDateTime}`,
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
                humidity: `${weather.main.humidity}`,

                maxTemp: maxTemp,
                minTemp: minTemp,
                nextDays: nextDays
            });
        }))
        .catch((error) => {
            res.json({
                status: error.response.status,
                message: `${city} not found`,
            });
        });


    // Format time to 'HH:MM'
    const formatTime = function(unixTimestamp) {
        let date = new Date(unixTimestamp * 1000);
        let hours = date.getUTCHours();
        let minutes = '0' + date.getUTCMinutes();
        return hours + ':' + minutes.slice(-2);
    };

    // Return day of a wee from timestamp
    const dayOfWeek = function(unixTimestamp) {
        let days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let date = new Date(unixTimestamp * 1000);
        return days[date.getUTCDay()];
    };
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
// });
  

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});