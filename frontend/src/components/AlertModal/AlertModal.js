import { useRef, useEffect } from 'react';

// import react components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import scss
import "./AlertModal.scss"; 


function AlertModal({ setShow, show, query }) {
    const handleClose = () => setShow(false);

    // focus buttton after render to allow closing the modal by enter
    const btn = useRef();
    useEffect(() => {if (btn.current) btn.current.focus()}, [show]);

    return (
        <Modal
            className="text-dark"
            id="alertModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
        >
            <Modal.Header className="border-0 bg-alert" closeButton>
                <Modal.Title>
                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />
                    &nbsp;'{query}' not found!
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer className="border-0 bg-alert">
                <Button ref={btn} variant="outline-dark" onClick={handleClose}>
                    Close and try again!
                </Button>
            </Modal.Footer>
        </Modal>
    );
};


export default AlertModal;