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

            ///// Get current weather data /////

            // https://openweathermap.org/current
            let weather = weatherResponse.data;
            // Get weather forecast data
            let forecast = forecastResponse.data;

            // Get current timestamp from moment.js with timezone from response
            let nowPlusTimezone = moment().utc(false).unix() + weather.timezone;
            
            // Get current date and time from moment.js to display on main page (it is more accurate than from Openweathermap)
            let currentDate = moment().utc(false).add(weather.timezone, 'seconds').format('DD-MM-YYYY');
            let currentTime = moment().utc(false).add(weather.timezone, 'seconds').format('HH:mm');


            ///// Get forecast for the next 24 hours /////
            
            let time24 = [];
            let icons24 = [];
            let temp24 = [];

            for (i = 0; i < 8; i++) {
                let dtPlusTimezone = forecast.list[i].dt + forecast.city.timezone;

                time24.push(moment(dtPlusTimezone * 1000).utc(false).format('HH:mm'));
                icons24.push(`http://openweathermap.org/img/wn/${forecast.list[i].weather[0].icon}@2x.png`);
                temp24.push(Math.round(forecast.list[i].main.temp));
            };



            /*
            Prepare forecast data: min and max temperature for next 4 days
            The response provides forecast for nest 5 days every three hours
            https://openweathermap.org/forecast5
            */

            let maxTemp = [];
            let minTemp = [];
            let nextDays = [];
            let dailyIcons = [];

            let hours = [];
            let temp = [];
            let icons = [];

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
                        nextDays.push(moment(dtPlusTimezone * 1000).utc(true).format('dddd'));


                        ///// Main daily forecast /////

                        // Get max and min temperature for each day
                        let tempList = [];

                        for (j = 0; j < 8; j++) {
                            tempList.push(Math.round(forecast.list[i+j].main.temp));
                        };

                        maxTemp.push(Math.max(...tempList));
                        minTemp.push(Math.min(...tempList));

                        // Get daily representative icon and push into the list

                        let iconStrList = [];

                        for (j = 0; j < 8; j++) {
                            let iconStr = forecast.list[i+j].weather[0].icon;

                            // Check if icon is for a day
                            // https://openweathermap.org/weather-conditions
                            if (iconStr.slice(-1) == 'd') {
                                iconStrList.push(iconStr);
                            };
                        };

                        // Sort the icon list descending
                        iconStrList.sort().reverse();

                        // Create new list with unique icons sorted descending
                        let uniq = [...new Set(iconStrList)];
                        let result;

                        if (iconStrList.length === uniq.length) {
                            // If the icons do not repeat then the representative one 
                            // is the first one in the list
                            result = iconStrList[0];
                        } else {
                            // If the icons are repeated then the representative one 
                            // is the one that repeats the most times
                            
                            // Create list with icons and their quantity
                            let counted = [];
                            uniq.forEach(item => {
                                counted.push([item, iconStrList.filter(el => el == item).length]);
                            });

                            // Sort by icons quantity
                            counted.sort(function(x, y) {
                                return y[1] - x[1];
                            });

                            // Get the one that repeats the most times
                            result = counted[0][0];
                        };

                        dailyIcons.push(`http://openweathermap.org/img/wn/${result}@2x.png`);


                        ///// Hourly forecast /////

                        // Get hours for detailed forecast, only once (hours for every day are the same)
                        if (hours.length === 0) {
                            for (j = 0; j < 8; j++) {
                                hours.push(moment((forecast.list[i+j].dt + forecast.city.timezone) * 1000).utc(false).format('HH:mm'));
                            };
                        };

                        // Get temp for every hour
                        temp.push(tempList);

                        // Get weather icon for every hour
                        let iconsList = [];

                        for (j = 0; j < 8; j++) {
                            iconsList.push(`http://openweathermap.org/img/wn/${forecast.list[i+j].weather[0].icon}@2x.png`);
                        };
                        
                        icons.push(iconsList);

                    } catch {
                        break;
                    };
                };
            };

            // post weather and forecast parameters
            res.json({
                place: `${weather.name}, ${weather.sys.country}`,
                today: `${currentDate}`,
                now: `${currentTime}`,
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
                    nextDays: nextDays,
                    dailyIcons: dailyIcons,
                    maxTemp: maxTemp,
                    minTemp: minTemp
                },
                forecastDetails: {
                    hours: hours,
                    temp: temp,
                    icons: icons
                },
                forecast24: {
                    time24: time24,
                    icons24: icons24,
                    temp24: temp24
                }
            });
        }))
        .catch(() => res.json({ msg: 'error' }));
};

module.exports = weather;