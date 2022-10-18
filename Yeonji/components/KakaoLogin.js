import React, { Component, useEffect, useState } from 'react';

class KakaoLogin extends Component {

    componentDidMount() {

        const kakaoScript = document.createElement("script");

        kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
        document.head.appendChild(kakaoScript);

        kakaoScript.onload = () => {
            window.Kakao.init("6c34601c92d0556aa8d56ace8308b5ba");

            window.Kakao.Auth.createLoginButton({
                container: "#kakao-login-btn",
                success: (auth) => {
                    console.log("Kakao 로그인 완료", auth.access_token);

                    window.Kakao.API.request({
                        url: "/v2/user/me",
                        success: (res) => {
                            console.log("Kakao 사용자 정보", res);
                            sessionStorage.setItem("profile", res.properties.profile_image);
                            sessionStorage.setItem("id",res.id);
                            console.log(window.Kakao.Auth.getAccessToken());//토큰
                            //로그인 후 들어갈 곳
                            //window.location.href="http://localhost:3001";
                        },
                        fail: (err) => {
                            console.log(err);
                        },
                    })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                },
                fail: (err) => {
                    console.log(err);
                },
            });
            window.Kakao.init();
        };

    }
    render() {
        return (
            <div>
                <div type="button" id="kakao-login-btn"></div>
            </div>
        )
    }
}

export default KakaoLogin;