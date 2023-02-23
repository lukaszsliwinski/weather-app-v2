// import react components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import scss
import './AlertModal.scss';

function AlertModal({ setShow, show, query }: {setShow: (show: boolean) => void, show: boolean, query: string} ) {
    const handleClose = () => setShow(false);

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
                    &nbsp;'{query}' not found!
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer className="border-0 bg-alert">
                <Button variant="outline-dark" onClick={handleClose}>
                    Close and try again!
                </Button>
            </Modal.Footer>
        </Modal>
    );
};


export default AlertModal;