// import scss
import "./HourlyForecastItem.scss"; 


function HourlyForecastItem({ time, icon, temp }) {
    return (
        <div className="text-center card24">
            <h6>{time}</h6>
            <div>
                <img src={icon} className="icon24" alt="Weather icon" />
                <div>{temp}°C</div>
            </div>
        </div>
    );
};

export default HourlyForecastItem;