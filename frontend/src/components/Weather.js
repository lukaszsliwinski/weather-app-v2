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

            <table>
                <tr>
                    <th colspan='8'>{data.forecast.nextDays[0]}</th>
                </tr>
                <tr>
                    <th>{data.forecastDetails.hours[0][0]}</th>
                    <th>{data.forecastDetails.hours[0][1]}</th>
                    <th>{data.forecastDetails.hours[0][2]}</th>
                    <th>{data.forecastDetails.hours[0][3]}</th>
                    <th>{data.forecastDetails.hours[0][4]}</th>
                    <th>{data.forecastDetails.hours[0][5]}</th>
                    <th>{data.forecastDetails.hours[0][6]}</th>
                    <th>{data.forecastDetails.hours[0][7]}</th>
                </tr>
                <tr>
                    <td><img src={data.forecastDetails.icons[0][0]} /></td>
                    <td><img src={data.forecastDetails.icons[0][1]} /></td>
                    <td><img src={data.forecastDetails.icons[0][2]} /></td>
                    <td><img src={data.forecastDetails.icons[0][3]} /></td>
                    <td><img src={data.forecastDetails.icons[0][4]} /></td>
                    <td><img src={data.forecastDetails.icons[0][5]} /></td>
                    <td><img src={data.forecastDetails.icons[0][6]} /></td>
                    <td><img src={data.forecastDetails.icons[0][7]} /></td>
                </tr>
                <tr>
                    <td>{data.forecastDetails.temp[0][0]}</td>
                    <td>{data.forecastDetails.temp[0][1]}</td>
                    <td>{data.forecastDetails.temp[0][2]}</td>
                    <td>{data.forecastDetails.temp[0][3]}</td>
                    <td>{data.forecastDetails.temp[0][4]}</td>
                    <td>{data.forecastDetails.temp[0][5]}</td>
                    <td>{data.forecastDetails.temp[0][6]}</td>
                    <td>{data.forecastDetails.temp[0][7]}</td>
                </tr>
            </table>

            <table>
                <tr>
                    <th colspan='8'>{data.forecast.nextDays[1]}</th>
                </tr>
                <tr>
                    <th>{data.forecastDetails.hours[1][0]}</th>
                    <th>{data.forecastDetails.hours[1][1]}</th>
                    <th>{data.forecastDetails.hours[1][2]}</th>
                    <th>{data.forecastDetails.hours[1][3]}</th>
                    <th>{data.forecastDetails.hours[1][4]}</th>
                    <th>{data.forecastDetails.hours[1][5]}</th>
                    <th>{data.forecastDetails.hours[1][6]}</th>
                    <th>{data.forecastDetails.hours[1][7]}</th>
                </tr>
                <tr>
                    <td><img src={data.forecastDetails.icons[1][0]} /></td>
                    <td><img src={data.forecastDetails.icons[1][1]} /></td>
                    <td><img src={data.forecastDetails.icons[1][2]} /></td>
                    <td><img src={data.forecastDetails.icons[1][3]} /></td>
                    <td><img src={data.forecastDetails.icons[1][4]} /></td>
                    <td><img src={data.forecastDetails.icons[1][5]} /></td>
                    <td><img src={data.forecastDetails.icons[1][6]} /></td>
                    <td><img src={data.forecastDetails.icons[1][7]} /></td>
                </tr>
                <tr>
                    <td>{data.forecastDetails.temp[1][0]}</td>
                    <td>{data.forecastDetails.temp[1][1]}</td>
                    <td>{data.forecastDetails.temp[1][2]}</td>
                    <td>{data.forecastDetails.temp[1][3]}</td>
                    <td>{data.forecastDetails.temp[1][4]}</td>
                    <td>{data.forecastDetails.temp[1][5]}</td>
                    <td>{data.forecastDetails.temp[1][6]}</td>
                    <td>{data.forecastDetails.temp[1][7]}</td>
                </tr>
            </table>

            <table>
                <tr>
                    <th colspan='8'>{data.forecast.nextDays[2]}</th>
                </tr>
                <tr>
                    <th>{data.forecastDetails.hours[2][0]}</th>
                    <th>{data.forecastDetails.hours[2][1]}</th>
                    <th>{data.forecastDetails.hours[2][2]}</th>
                    <th>{data.forecastDetails.hours[2][3]}</th>
                    <th>{data.forecastDetails.hours[2][4]}</th>
                    <th>{data.forecastDetails.hours[2][5]}</th>
                    <th>{data.forecastDetails.hours[2][6]}</th>
                    <th>{data.forecastDetails.hours[2][7]}</th>
                </tr>
                <tr>
                    <td><img src={data.forecastDetails.icons[2][0]} /></td>
                    <td><img src={data.forecastDetails.icons[2][1]} /></td>
                    <td><img src={data.forecastDetails.icons[2][2]} /></td>
                    <td><img src={data.forecastDetails.icons[2][3]} /></td>
                    <td><img src={data.forecastDetails.icons[2][4]} /></td>
                    <td><img src={data.forecastDetails.icons[2][5]} /></td>
                    <td><img src={data.forecastDetails.icons[2][6]} /></td>
                    <td><img src={data.forecastDetails.icons[2][7]} /></td>
                </tr>
                <tr>
                    <td>{data.forecastDetails.temp[2][0]}</td>
                    <td>{data.forecastDetails.temp[2][1]}</td>
                    <td>{data.forecastDetails.temp[2][2]}</td>
                    <td>{data.forecastDetails.temp[2][3]}</td>
                    <td>{data.forecastDetails.temp[2][4]}</td>
                    <td>{data.forecastDetails.temp[2][5]}</td>
                    <td>{data.forecastDetails.temp[2][6]}</td>
                    <td>{data.forecastDetails.temp[2][7]}</td>
                </tr>
            </table>
            
            <table>
                <tr>
                    <th colspan='8'>{data.forecast.nextDays[3]}</th>
                </tr>
                <tr>
                    <th>{data.forecastDetails.hours[3][0]}</th>
                    <th>{data.forecastDetails.hours[3][1]}</th>
                    <th>{data.forecastDetails.hours[3][2]}</th>
                    <th>{data.forecastDetails.hours[3][3]}</th>
                    <th>{data.forecastDetails.hours[3][4]}</th>
                    <th>{data.forecastDetails.hours[3][5]}</th>
                    <th>{data.forecastDetails.hours[3][6]}</th>
                    <th>{data.forecastDetails.hours[3][7]}</th>
                </tr>
                <tr>
                    <td><img src={data.forecastDetails.icons[3][0]} /></td>
                    <td><img src={data.forecastDetails.icons[3][1]} /></td>
                    <td><img src={data.forecastDetails.icons[3][2]} /></td>
                    <td><img src={data.forecastDetails.icons[3][3]} /></td>
                    <td><img src={data.forecastDetails.icons[3][4]} /></td>
                    <td><img src={data.forecastDetails.icons[3][5]} /></td>
                    <td><img src={data.forecastDetails.icons[3][6]} /></td>
                    <td><img src={data.forecastDetails.icons[3][7]} /></td>
                </tr>
                <tr>
                    <td>{data.forecastDetails.temp[3][0]}</td>
                    <td>{data.forecastDetails.temp[3][1]}</td>
                    <td>{data.forecastDetails.temp[3][2]}</td>
                    <td>{data.forecastDetails.temp[3][3]}</td>
                    <td>{data.forecastDetails.temp[3][4]}</td>
                    <td>{data.forecastDetails.temp[3][5]}</td>
                    <td>{data.forecastDetails.temp[3][6]}</td>
                    <td>{data.forecastDetails.temp[3][7]}</td>
                </tr>
            </table>
        </>
    );
};

export default Weather;