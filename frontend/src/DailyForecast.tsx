// import react components
import Row from 'react-bootstrap/Row';

// import components
import { IForecast, IForecastDetails } from './types';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function DailyForecast({ forecast }: {forecast: IForecast }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<4; i++) {
        content.push(
                <div className="text-center">
                    <div className="fw-semibold">{forecast.nextDays[i]}</div>
                    <Image src={forecast.dailyIcons[i]} alt="Weather icon" />
                    <div key={i}>
                        <span className="fw-semibold fs-115">
                            &nbsp;{forecast.maxTemp[i]}°C
                        </span> /
                        <span className="fw-semibold fs-115">
                            {forecast.minTemp[i]}°C
                        </span>
                    </div>
                </div>
        );
    };

    return (
        <>
            <Row className="translate-y-150 mx-3 fs-070 fw-bold">daily forecast</Row>
            <Row className="m-1 pt-4 pb-3 bg-section">
                <div className='d-flex'>{content}</div>
            </Row>
        </>
    );
};

export default DailyForecast;