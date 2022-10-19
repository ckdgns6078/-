import React, { useEffect, useRef } from 'react'
import styles from '../Navercss.css';
import Naverimg from './NaverButton.png';
import { useLocation } from 'react-router-dom';



function Naver() {
    const naverRef = useRef();
	const { naver } = window
    const NAVER_CLIENT_ID = "OcAsBqkibE994tAMco3N";
    const NAVER_CALLBACK_URL = "http://localhost:3001";


    useEffect(() => {
		const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            // 팝업창으로 로그인을 진행할 것인지?           
            isPopup: false,
            // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
            loginButton: { color: 'green', type: 3, height: 48 },
            callbackHandle: true,
        })
        naverLogin.init()
        naverLogin.getLoginStatus(async function (status) {
            if (status) {
                // 아래처럼 선택하여 추출이 가능하고, 
                const user_id = naverLogin.user.getEmail();
                const username = naverLogin.user.getName();
                const profile = naverLogin.user.profile_image;
                // console.log(user_id);
                // console.log(naverLogin.user);
                // console.log(profile);
                sessionStorage.setItem("id",user_id);
                sessionStorage.setItem("profile",profile);
                console.log(naverRef.current.value);
                // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다. 
                // setUserInfo(naverLogin.user)
                console.log("로그인 완료");
                
            }
        })
        naverLogin.logout();
    }, [])
    
    const handleClick = () => {
        naverRef.current.children[0].click();    
    }
    return (
        <>
            <div ref={naverRef} id="naverIdLogin"></div>
            <button onClick={handleClick} className="naverButton">
                <img src={Naverimg} className="img"/>
            </button>
        </>
    )
}
export default Naver;