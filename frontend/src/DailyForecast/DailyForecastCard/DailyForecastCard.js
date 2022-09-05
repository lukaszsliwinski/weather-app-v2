import { useState } from 'react';

// import react components
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import components
import HourlyForecastModal from '../../HourlyForecast/HourlyForecastModal/HourlyForecastModal';


function DailyForecastCard({ day, icon, max, min, modalDate, modalHours, modalIcons, modalTemp }) {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <>
            <div className="text-center">
                <div className="fw-semibold fs-080">{day}</div>
                <Image src={icon} alt="Weather icon" />
                <div className="fw-semibold fs-115">
                    <FontAwesomeIcon icon="fa-solid fa-temperature-arrow-up" size="xs" fixedWidth />
                    &nbsp;{max}°C
                </div>
                <div className="fw-semibold fs-115">
                    <FontAwesomeIcon icon="fa-solid fa-temperature-arrow-down" size="xs" fixedWidth />
                    &nbsp;{min}°C
                </div>
                <Button variant="outline-dark" size="sm" className="mt-2"
                    onClick={() => setModalShow(true)}>
                    hourly
                </Button>
            </div>
            <HourlyForecastModal
                day={day}
                date={modalDate}
                modalHours={modalHours}
                modalIcons={modalIcons}
                modalTemp={modalTemp}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>

    );
};

export default DailyForecastCard;