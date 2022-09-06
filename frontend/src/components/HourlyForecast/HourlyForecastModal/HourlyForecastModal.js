// import react components
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import components
import HourlyForecastItem from '../HourlyForecastItem/HourlyForecastItem';

function HourlyForecastModal(props) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<8; i++) {
        content.push(
            <HourlyForecastItem 
                time={props.modalHours[i]}
                icon={props.modalIcons[i]}
                temp={props.modalTemp[i]}
            />
        );
    };

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header className="border-0 pb-0" closeButton>
                <Modal.Title className="d-block">
                    <FontAwesomeIcon icon="fa-regular fa-calendar" fixedWidth />&nbsp;
                    {props.date} - {props.day}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-0">
                <Row className=""><span className="frame-header">hourly forecast</span></Row>
                <Row className="my-2 border-top p-1 pt-4">
                    <Col className="d-flex justify-content-between">
                        {content}
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default HourlyForecastModal;