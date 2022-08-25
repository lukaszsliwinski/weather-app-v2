import Modal from 'react-bootstrap/Modal';

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
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.day}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-between">
                    {content}
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default HourlyForecastModal;