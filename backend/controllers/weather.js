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

            let hours = [];
            let temp = [];
            let icon = [];

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


                        ///// Main daily forecast /////

                        // Get max temperature for each day
                        let minT = [
                            Math.round(forecast.list[i].main.temp_max),
                            Math.round(forecast.list[i+1].main.temp_max),
                            Math.round(forecast.list[i+2].main.temp_max),
                            Math.round(forecast.list[i+3].main.temp_max),
                            Math.round(forecast.list[i+4].main.temp_max),
                            Math.round(forecast.list[i+5].main.temp_max),
                            Math.round(forecast.list[i+6].main.temp_max),
                            Math.round(forecast.list[i+7].main.temp_max)
                        ];
                        maxTemp.push(Math.max(...minT));

                        // Get min temperature for each day
                        let maxT = [
                            Math.round(forecast.list[i].main.temp_min),
                            Math.round(forecast.list[i+1].main.temp_min),
                            Math.round(forecast.list[i+2].main.temp_min),
                            Math.round(forecast.list[i+3].main.temp_min),
                            Math.round(forecast.list[i+4].main.temp_min),
                            Math.round(forecast.list[i+5].main.temp_min),
                            Math.round(forecast.list[i+6].main.temp_min),
                            Math.round(forecast.list[i+7].main.temp_min)
                        ];
                        minTemp.push(Math.min(...maxT));

                        ///// Hourly forecast /////

                        hours.push([
                            moment((forecast.list[i].dt + forecast.city.timezone) * 1000).utc(false).format('HH:mm'),
                            moment((forecast.list[i+1].dt + forecast.city.timezone) * 1000).utc(false).format('HH:mm'),
                            moment((forecast.list[i+2].dt + forecast.city.timezone) * 1000).utc(false).format('HH:mm'),
                            moment((forecast.list[i+3].dt + forecast.city.timezone) * 1000).utc(false).format('HH:mm'),
                            moment((forecast.list[i+4].dt + forecast.city.timezone) * 1000).utc(false).format('HH:mm'),
                            moment((forecast.list[i+5].dt + forecast.city.timezone) * 1000).utc(false).format('HH:mm'),
                            moment((forecast.list[i+6].dt + forecast.city.timezone) * 1000).utc(false).format('HH:mm'),
                            moment((forecast.list[i+7].dt + forecast.city.timezone) * 1000).utc(false).format('HH:mm')
                        ]);


                        temp.push([
                            Math.round(forecast.list[i].main.temp),
                            Math.round(forecast.list[i+1].main.temp),
                            Math.round(forecast.list[i+2].main.temp),
                            Math.round(forecast.list[i+3].main.temp),
                            Math.round(forecast.list[i+4].main.temp),
                            Math.round(forecast.list[i+5].main.temp),
                            Math.round(forecast.list[i+6].main.temp),
                            Math.round(forecast.list[i+7].main.temp)
                        ]);

                        icon.push([
                            `http://openweathermap.org/img/wn/${forecast.list[i].weather.icon}@2x.png`,
                            `http://openweathermap.org/img/wn/${forecast.list[i+1].weather.icon}@2x.png`,
                            `http://openweathermap.org/img/wn/${forecast.list[i+2].weather.icon}@2x.png`,
                            `http://openweathermap.org/img/wn/${forecast.list[i+3].weather.icon}@2x.png`,
                            `http://openweathermap.org/img/wn/${forecast.list[i+4].weather.icon}@2x.png`,
                            `http://openweathermap.org/img/wn/${forecast.list[i+5].weather.icon}@2x.png`,
                            `http://openweathermap.org/img/wn/${forecast.list[i+6].weather.icon}@2x.png`,
                            `http://openweathermap.org/img/wn/${forecast.list[i+7].weather.icon}@2x.png`
                        ]);

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
                },
                forecastDetails: {
                    hours: hours,
                    temp: temp,
                    icon: icon
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