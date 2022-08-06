import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState({
        input: '',
        place: '',
        now: '',
        weather: {
            description: '',
            icon: '',
            temp: '',
            sensed: '',
            min: '',
            max: '',
            sunrise: '',
            sunset: '',
            wind: '',
            cloudiness: '',
            pressure: '',
            humidity: '',
        },
        forecast: {
            maxTemp: ['', '', '', ''],
            minTemp: ['', '', '', ''],
            nextDays: ['', '', '', ''],
        },
    });



        const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await axios.post('/api/weather', { city: query });
            
            if (response.data.status == '404') {
                alert(response.data.message);
            } else {
                setData({
                    input: '',
                    place: response.data.place,
                    now: response.data.now,
                    weather: {
                        description: response.data.description,
                        icon: response.data.icon,
                        temp: response.data.temp,
                        sensed: response.data.sensed,
                        min: response.data.min,
                        max: response.data.max,
                        sunrise: response.data.sunrise,
                        sunset: response.data.sunset,
                        wind: response.data.wind,
                        cloudiness: response.data.cloudiness,
                        pressure: response.data.pressure,
                        humidity: response.data.humidity,
                    },
                    forecast: {
                        maxTemp: response.data.maxTemp,
                        minTemp: response.data.minTemp,
                        nextDays: response.data.nextDays,
                    },
                });
            };
        };






    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
            <p>{data.place}&nbsp;{data.now}&nbsp;{data.weather.description}<img src={data.weather.icon} /></p>
            <table>
                <thead>
                    <th colSpan="10">weather</th>
                </thead>
                <tbody>
                    <tr>
                        <th>temp</th>
                        <th>sensed</th>
                        <th>min</th>
                        <th>max</th>
                        <th>sunrise</th>
                        <th>sunset</th>
                        <th>wind</th>
                        <th>cloudiness</th>
                        <th>pressure</th>
                        <th>humidity</th>
                    </tr>
                    <tr>
                        <td>{data.weather.temp}</td>
                        <td>{data.weather.sensed}</td>
                        <td>{data.weather.min}</td>
                        <td>{data.weather.max}</td>
                        <td>{data.weather.sunrise}</td>
                        <td>{data.weather.sunset}</td>
                        <td>{data.weather.wind}</td>
                        <td>{data.weather.cloudiness}</td>
                        <td>{data.weather.pressure}</td>
                        <td>{data.weather.humidity}</td>
                    </tr>
                </tbody>
            </table>

            <table>
                <thead>
                    <th colSpan="4">forecast</th>
                </thead>
                <tbody>
                    <tr>
                        <th>{data.forecast.nextDays[0]}</th>
                        <th>{data.forecast.nextDays[1]}</th>
                        <th>{data.forecast.nextDays[2]}</th>
                        <th>{data.forecast.nextDays[3]}</th>
                    </tr>
                    <tr>
                        <td>{data.forecast.maxTemp[0]}</td>
                        <td>{data.forecast.maxTemp[1]}</td>
                        <td>{data.forecast.maxTemp[2]}</td>
                        <td>{data.forecast.maxTemp[3]}</td>
                    </tr>
                    <tr>
                        <td>{data.forecast.minTemp[0]}</td>
                        <td>{data.forecast.minTemp[1]}</td>
                        <td>{data.forecast.minTemp[2]}</td>
                        <td>{data.forecast.minTemp[3]}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default App;