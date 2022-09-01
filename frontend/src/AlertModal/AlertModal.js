// import react components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AlertModal({ setShow, show, query }) {
    const handleClose = () => setShow(false);

    return (
        <Modal size="sm" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />&nbsp;
                    '{query}' not found!
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer className="border-0">
                <Button variant="outline-danger" onClick={handleClose}>
                    Close and try again!
                </Button>
            </Modal.Footer>
        </Modal>
    );
};


export default AlertModal;