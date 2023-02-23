import { useState } from 'react';

// import react components
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import components
import HourlyForecastModal from '../../HourlyForecast/HourlyForecastModal/HourlyForecastModal';


function DailyForecastCard(
    { day, icon, max, min, modalDate, modalHours, modalIcons, modalTemp }: 
    { day: string, icon: string, max: string, min: string, modalDate: string, modalHours: string, modalIcons: string, modalTemp: string }) {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <Col xs={6} sm={3}>
            <div className="text-center">
                <div className="fw-semibold">{day}</div>
                <Image src={icon} alt="Weather icon" />
                <div className="fw-semibold fs-115">
                    {/* <FontAwesomeIcon icon="fa-solid fa-temperature-arrow-up" size="xs" fixedWidth /> */}
                    &nbsp;{max}°C
                </div>
                <div className="fw-semibold fs-115">
                    {/* <FontAwesomeIcon icon="fa-solid fa-temperature-arrow-down" size="xs" fixedWidth /> */}
                    &nbsp;{min}°C
                </div>
                <Button className="btn-link btn-hover mt-2 border-0 bg-transparent fw-semibold main-color"
                    size="sm" onClick={() => setModalShow(true)}>hourly
                </Button>
            </div>
            <HourlyForecastModal
                day={day}
                date={modalDate}
                modalhours={modalHours}
                modalicons={modalIcons}
                modaltemp={modalTemp}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </Col>

    );
};

export default DailyForecastCard;