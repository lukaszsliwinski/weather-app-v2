import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';

function Weather({ data }) {
    let hourlyForecastObjs = [];

    for (let i = 0; i < 4; i++) {
        hourlyForecastObjs.push(
                            <HourlyForecast
                                day={data.forecast.nextDays[i]}
                                hours={data.forecastDetails.hours}
                                icons={data.forecastDetails.icons[i]}
                                temp={data.forecastDetails.temp[i]}
                            />
        );
    };

    return (
        <>
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

            <DailyForecast forecast={data.forecast} />
            
            {hourlyForecastObjs}
        </>
    );
};

export default Weather;