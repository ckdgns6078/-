import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import axios from "axios";

const HomeLest = ({show , onHide}) => {
  const [inputs, setInputs] = useState({  
    roomhost: '',
    roompw: '', 
    roomname: '',
  })

  const [roomhost,setroomhost] = useState("");
  const [roompw,setroompw] = useState("");
  const [roomname,setroomname] = useState("");

  const onChange1 = (event) =>{
    setroomhost(event.target.value)
  }
  const onChange2 = (event) =>{
    setroompw(event.target.value)
  }

  const onChange3 = (event) =>{
    setroomname(event.target.value)
  }

  const handleSubmit = () => {
   try {
    axios.post("http://Udangtangtangapp-env.eba-xaipu9ej.ap-northeast-2.elasticbeanstalk.com/createRoom", {roomHost: roomhost, roomPw: roompw, roomName: roomname})
   } catch (error) {
    console.error(error)
   } 
  }

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
        방 만들기
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>


    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>방제목 </Form.Label>
        <Form.Control type="text" placeholder="방제목 입력하세요" onChange = {onChange1}/>
        <Form.Text className="text-muted"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>방이름(key)</Form.Label>
        <Form.Control type="text" placeholder="방이름 입력하세요" onChange = {onChange2}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="비밀번호를 입력 하세요"  onChange = {onChange3}/>
      </Form.Group>
      
    </Form>
    </Modal.Body>
    <Modal.Footer>
    <Form onSubmit = {handleSubmit}>
      <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
      </Button>
    </Form>
    <Button onClick={onHide} >Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default HomeLest


