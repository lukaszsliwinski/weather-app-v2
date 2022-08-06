const axios = require('axios');
const moment = require('moment');
require('dotenv').config();

// Openweathermap api key
const apiKey = `${process.env.API_KEY}`;

weather = (req, res) => {

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
            let currentDateTime = moment(nowPlusTimezone * 1000).utc(false).format('DD-MM-YYYY');
            for (i = 0; i < forecast.list.length; i++) {
                /*
                Handle first hour in every day
                It could be from 0:00 to 2:45 depending on the timezone
                */
                let dtPlusTimezone = forecast.list[i].dt + forecast.city.timezone;
                if (
                    moment(nowPlusTimezone * 1000).utc(false).format('dddd') != moment(dtPlusTimezone * 1000).utc(false).format('dddd') &&
                    (dtPlusTimezone % 86400 >= 0 && dtPlusTimezone % 86400 <= 9900)     // Check the rest of division - 0 is 0:00, 9900 is 2:45
                    ) {
                    try {
                        // Push name of next day to the list
                        nextDays.push(moment(dtPlusTimezone * 1000).utc(false).format('dddd'));

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
                place: `${weather.name}, ${weather.sys.country}`,
                now: `${currentDateTime}`,
                weather: {
                    description: `${weather.weather[0].description}`,
                    icon: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                    temp: `${Math.round(weather.main.temp)}`,
                    sensed: `${Math.round(weather.main.feels_like)}`,
                    min: `${Math.round(weather.main.temp_min)}`,
                    max: `${Math.round(weather.main.temp_max)}`,
                    sunrise: `${moment((weather.sys.sunrise + weather.timezone) * 1000).utc(false).format('HH:mm')}`,
                    sunset: `${moment((weather.sys.sunset + weather.timezone) * 1000).utc(false).format('HH:mm')}`,
                    wind: `${Math.round(weather.wind.speed * 10) / 10}`,
                    cloudiness: `${weather.clouds.all}`,
                    pressure: `${Math.round(weather.main.pressure)}`,
                    humidity: `${weather.main.humidity}`
                },
                forecast: {
                    maxTemp: maxTemp,
                    minTemp: minTemp,
                    nextDays: nextDays
                }
            });
        }))
        .catch((error) => {
            res.json({
                status: error.response.status,
                message: `${city} not found`,
            });
        });
};

module.exports = weather;