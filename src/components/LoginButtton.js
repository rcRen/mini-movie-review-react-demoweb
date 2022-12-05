import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';

function LoginButtton() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Login
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default LoginButtton


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <img src={require('../images/monvie-low-logo.png')} style={{ width: 60, height: 'auto' }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginForm/>
            </Modal.Body>
        </Modal>
    );
}