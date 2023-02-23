// import react components
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HourlyForecastItem({ time, icon, temp }: { time: string, icon: string, temp: string }) {
    return (
        <Col sm={true} xs={3} className="text-center p-1">
            <div className="fw-semibold fs-080">{time}</div>
            <div>
                <Image src={icon} className="w-100 mw-4r" alt="Weather icon" />
                <div className="fs-090 fw-semibold">
                    {/* <FontAwesomeIcon icon="fa-solid fa-temperature-half" size="xs" fixedWidth /> */}
                    {temp}°C
                </div>
            </div>
        </Col>
    );
};

export default HourlyForecastItem;