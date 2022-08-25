import { useState } from 'react';

// import react components
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// import components
import HourlyForecastModal from './HourlyForecastModal';


function DailyForecastCard({ day, icon, max, min, modalHours, modalIcons, modalTemp }) {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <>
            <Card className="text-center">
                <Card.Header as="h6">{day}</Card.Header>
                <Card.Body>
                    <Image src={icon} alt="Weather icon" />
                    <div>{max}°C / {min}°C</div>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-dark" size="sm" onClick={() => setModalShow(true)}>
                        hourly
                    </Button>
                </Card.Footer>
            </Card>
            <HourlyForecastModal
                day={day}
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