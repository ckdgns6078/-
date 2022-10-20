import {React, useState}  from "react";
import  HomeLest from '../Components/HomeLest'
import Button from 'react-bootstrap/Button';
import Modal from "../Components/Modal";
import Sekes from "../pags/Sekes";
import { Link } from "react-router-dom";
import Client from "../pags/Client"

// eslint-disable-line no-unused-vars
const Sidebar = () => {

    const [gohome, setHomeLest] =useState(false);
    const [starthome, setModal] = useState(false);
    
  

    return(
        
        <div className='Sidebar'>
            <HomeLest show = {gohome} onHide = {()=> setHomeLest(false)}/>
            <Modal  show = {starthome} onHide= {() => setModal(false) }/>
           

            <ul >
                <li>
                <Button variant="outline-secondary" size="lg" onClick={() => setHomeLest(true)}>+ 방 만들기</Button> 
                </li>

                <li>
                <Button variant="outline-secondary" size="lg" onClick={() => setModal(true)}>+ 방 입장하기</Button> 
                </li>

                <li>
                <Link to="/Sekes">
                    <Button variant="outline-secondary" >예) 1번방</Button>{' '}
                </Link>
                </li>

                <li>
                <Link to="/Client">
                    <Button variant="outline-secondary" >예) 회의 목록 클릭</Button>{' '}
                </Link>
                </li>
                
            </ul>   

        </div>
    )
}

export default  Sidebar;


