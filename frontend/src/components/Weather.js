function Weather({ data }) {
    
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

export default Weather;