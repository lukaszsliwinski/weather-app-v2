// import react components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Main({ data }) {
    return (
        <>
            <Row>
                <Col sm={9}>
                    <span className="fs-3">{data.place}</span>
                    <br></br>
                    <span className="fs-090">{data.weather.description}</span>
                </Col>
                <Col sm={3}>
                    <FontAwesomeIcon icon="fa-regular fa-calendar" fixedWidth /><span>&nbsp;{data.today}</span>
                    <br></br>
                    <FontAwesomeIcon icon="fa-regular fa-clock" fixedWidth /><span>&nbsp;{data.now}</span>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 2, offset: 4 }}>
                    <Image className="img-size-120" src={data.weather.icon} alt="Weather icon" />
                </Col>
                <Col sm={2} className="d-flex flex-column justify-content-center align-items-center">
                    <span className="fs-1">
                        {data.weather.temp}°C
                    </span>
                    <span className="fs-080">
                        sensed&nbsp;
                        <span className="fs-6 fw-semibold">
                            {data.weather.sensed}°C
                        </span>
                    </span>
                </Col>
            </Row>
        </>
    );
};

export default Main;