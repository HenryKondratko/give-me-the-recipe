import React, {useState} from 'react';
import './SubmitButton.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const SubmitButton = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div>
            <button className="submit-button" onClick={handleShow}>Give Me The Recipe</button>
            <Modal
                show={showModal}
                onHide={handleClose}
                centered
                fullscreen={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Here is your recipe:</Modal.Title>
                </Modal.Header>
                <Modal.Body><h2>{props.recipeUrl}</h2></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Print Recipe
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SubmitButton;