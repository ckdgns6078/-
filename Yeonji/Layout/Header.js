import react, { useEffect, useState } from 'react';
import SignUpModal from '../modals/SignUpModal';
import LogOutModal from '../modals/LogOutModal';
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { render } from '@testing-library/react';

const Header = () => {
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [logOutModalOn, setLogOutModalOn] = useState(false);

    const id = sessionStorage.getItem("id");
    console.log(id);

    useEffect(() => {
        var src = document.getElementById("box");
        if (id != null) {
            src.innerHTML = "<div>"+ "<Nav.Link>"+sessionStorage.getItem("id")+"</Nav.Link>"+"<button class='profilebutton'> <div class='box'><img class='profile' src='" + sessionStorage.getItem("profile") 
            + "'/></div></Button>" +"</div>";
            
            // imgsrc.innerHTML = "<img className='profile' src='"+sessionStorage.getItem("profile")+"'/></div>"
            // console.log(sessionStorage.getItem("profile"));
            //         <div style="width:50px; height:50px;border-radius:70%; overflow:hidden;">
            //     <img style="width:100%; height:100%; object-fit:cover;" src={sessionStorage.getItem("profile")}></img>
            //   </div>
        }
    })

    return (
        <>
            <SignUpModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)} />
            <LogOutModal show={logOutModalOn} onHide={() => setLogOutModalOn(false)} />
            <header>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">우당탕탕</Navbar.Brand>
                        <Nav className="ml-auto">
                            {/* <Nav.Link >Home</Nav.Link>
                            <Nav.Link>Features</Nav.Link> */}
                            <Nav.Link><div id="box"></div></Nav.Link>
                            <div>
                                {
                                    id === null ? <Nav.Link><Button variant="primary" onClick={() => setSignUpModalOn(true)}>Sign Up & Sign In</Button></Nav.Link> : <Nav.Link><Button ariant="primary" onClick={() => setLogOutModalOn(true)}>Logout</Button> </Nav.Link>
                                }
                            </div>
                        </Nav>
                    </Container>
                </Navbar>

            </header>

        </>

    )
}
export default Header;