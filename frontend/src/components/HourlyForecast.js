function HourlyForecast({ day, hours, icons, temp }) {
    let hourItems = [];
    let iconItems = [];
    let tempItems = [];

    for (let i = 0; i < 8; i++) {
        hourItems.push(<th>{hours[i]}</th>);
        iconItems.push(<td><img src={icons[i]} /></td>);
        tempItems.push(<td>{temp[i]}</td>);
    };


    return (
        <table>
            <tr><th colspan='8'>{day}</th></tr>
            <tr>{hourItems}</tr>
            <tr>{iconItems}</tr>
            <tr>{tempItems}</tr>
        </table>
    );
};

export default HourlyForecast;