import React, { Component } from 'react';
import Styled from 'styled-components';
import withRouter  from '../withRouter';

const ButtonWrap = Styled.div`
  border: 2px solid black;
  position: relative;
  margin: 38px auto;
  width: 183px;
  height: 45px;
  h2 {
      color: black;
      font-size: 20px;
      text-align: center;
  }
`;

const { Kakao } = window;

class KakaoLogout extends Component {
  state = {
    isLogin: true,
  };
  logoutWithKakao = () => {
    Kakao.Auth.logout(()=>{
        console.lof('로그아웃되었')
    })

    if (Kakao.Auth.getAccessToken()) {
      console.log(
        '카카오 인증 액세스 토큰이 존재합니다.',
        Kakao.Auth.getAccessToken(),
      );
      Kakao.Auth.logout(() => {
        console.log('로그아웃 되었습니다.', Kakao.Auth.getAccessToken());
        alert('로그아웃되었습니다.');

        this.setState({
          isLogin: false,
        });
        localStorage.clear();
        this.props.navigate.push('/');
      });
      sessionStorage.clear();
    }
    
  };
  componentDidMount() {
    if (Kakao.Auth.getAccessToken()) {
      this.setState({
        isLogin: false,
      });
    }
  }

  render() {
    const { isLogin } = this.state;
    const logoutView = (
      <ButtonWrap onClick={this.logoutWithKakao}>
        <h2>로그아웃</h2>
      </ButtonWrap>
    );

    return <div className="d-grid gap-2">{logoutView}</div>;
  }
}

export default withRouter(KakaoLogout);