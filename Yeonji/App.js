import React from 'react';

import Layout from './layouts/Layout';
//import SignUpModal from './modals/SignUpModal';
import {Container} from "react-bootstrap";
//import KakaoLogout from './components/KakaoLogout';

import "./App.css";
import Auth from "./Auth";
import Profile from "./Profile";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import SignUpModal from './modals/SignUpModal';
import SidebarData from '../src/components/SidebarData';


function App(){
  const REST_API_KEY = "1e3f63243c3b3f3d53a59048784908b6";
  const REDIRECT_URI = "http://localhost:3001/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  //navererror();
  return (
    <>
    
    <SidebarData/>

    {/* <Routes>
    <Route path="/NaverLogin" element={<NaverLogin/>}></Route>
    </Routes> */}
    
    
   </>
  );
}

export default App;


{/* <Layout>
      <Container style={{ minHeight: "75vh" }}>
        
        </Container>
      </Layout> */}
      

      <div className='App'>
        {
          sessionStorage.getItem("id")
        }

      </div>

    {/* <SignUpModal></SignUpModal> */}
    
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route exact path="/" element={
    //         <h1>
    //           <a href={KAKAO_AUTH_URL}>Kakao Login</a>
    //         </h1>}>
    //       </Route>
    //       <Route path="/oauth/kakao/callback" element={<Auth />}>
            
    //       </Route>
    //       <Route path="/profile" element={<Profile />}>
            
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  //);