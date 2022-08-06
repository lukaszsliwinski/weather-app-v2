function DailyForecast({ forecast }) {
    let dayItems = [];
    let maxTempItems = [];
    let minTempItems = [];
    
    for (let i = 0; i < 4; i++) {
        dayItems.push(<th>{forecast.nextDays[i]}</th>);
        maxTempItems.push(<td>{forecast.maxTemp[i]}</td>);
        minTempItems.push(<td>{forecast.minTemp[i]}</td>);
    };

    return (
        <table>
            <thead>
                <th colSpan="4">forecast</th>
            </thead>
            <tbody>
                <tr>{dayItems}</tr>
                <tr>{maxTempItems}</tr>
                <tr>{minTempItems}</tr>
            </tbody>
        </table>
    );
};

export default DailyForecast;