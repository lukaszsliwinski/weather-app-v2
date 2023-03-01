// import react components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// import components
import { IForecast24 } from './types';

function Next24HoursForecast({ forecast24 }: { forecast24: IForecast24 }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<4; i++) {
        content.push(
            <Col sm={true} xs={3} className="text-center p-1">
                <div key={i} className="fw-semibold fs-115">{forecast24.time24[i]}</div>
                <div>
                    <Image src={forecast24.icons24[i]} alt="Weather icon" />
                    <div className="fs-115 fw-semibold">
                        {forecast24.temp24[i]}°C
                    </div>
                </div>
            </Col>
        );
    };

    return (
        <>
            <Row className="translate-y-150 mx-3 fs-070 fw-bold">next 24 hours</Row>
            <Row className="d-flex justify-content-between m-1 minh-10r pt-4 pb-3 bg-section">
                {content}
            </Row>
        </>
    );
};

export default Next24HoursForecast;