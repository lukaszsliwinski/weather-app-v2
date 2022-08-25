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
                </Col>
                <Col sm={3}>
                    <div className="">
                        <FontAwesomeIcon icon="fa-regular fa-calendar" fixedWidth /><span>&nbsp;{data.today}</span>
                        <br></br>
                        <FontAwesomeIcon icon="fa-regular fa-clock" fixedWidth /><span>&nbsp;{data.now}</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 2, offset: 4 }}>
                    <Image src={data.weather.icon} alt="Weather icon" />
                </Col>
                <Col sm={2}>
                    <span className="fs-1">{data.weather.temp}°C</span>
                    <br></br>
                    <span>sensed&nbsp;{data.weather.sensed}°C</span>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                    <div className="text-center">{data.weather.description}</div>
                </Col>
            </Row>
        </>
    );
};

export default Main;