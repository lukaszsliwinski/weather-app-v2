// import react components
import Image from 'react-bootstrap/Image';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function HourlyForecastItem({ time, icon, temp }) {
    return (
        <div className="text-center w-10">
            <div className="fw-semibold fs-080">{time}</div>
            <div>
                <Image src={icon} className="w-100" alt="Weather icon" />
                <div className="fw-semibold">
                    <FontAwesomeIcon icon="fa-solid fa-temperature-half" size="xs" fixedWidth />
                    {temp}°C
                </div>
            </div>
        </div>
    );
};

export default HourlyForecastItem;