// import react components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AlertModal({ setShow, show, query }) {
    const handleClose = () => setShow(false);

    return (
        <Modal size="sm" show={show} onHide={handleClose}>
            <Alert variant="danger" className="mb-0">
                <Alert.Heading>
                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />&nbsp;
                    '{query}' not found!
                </Alert.Heading>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close and try again!
                    </Button>
                </div>
            </Alert>
        </Modal>
    );
};


export default AlertModal;