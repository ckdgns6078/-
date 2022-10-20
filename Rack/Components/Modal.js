import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import Form from 'react-bootstrap/Form';


const Modal1 = ({show , onHide}) => {
  return (
    <Modal
    show = {show}
    onHide = {onHide}
     
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      방 입장하기
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>방이름(key)</Form.Label>
        <Form.Control type="text" placeholder="방이름 입력하세요" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="비밀번호를 입력 하세요" />
      </Form.Group>
      
      
      
    </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Modal1