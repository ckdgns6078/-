import React from 'react';
import {Modal,Button, Container} from 'react-bootstrap';
import KakaoLogin from'../components/KakaoLogin';
import NaverLogin from'../components/NaverLogin';
import Facebook from '../components/Facebook';
import {Link} from 'react-router-dom';


const SignUpModal = ({show, onHide})=>{
    function handleClose() {
        onHide(false);
    }
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Login
                </Modal.Title>
            </Modal.Header>

            <Modal.Body onClick={handleClose}>
            <div className="d-grid gap-2" align="center">
                <KakaoLogin></KakaoLogin>
                <NaverLogin/>
                <Facebook></Facebook>
            </div>
            </Modal.Body>
        
        </Modal>
    )
}

export default SignUpModal;