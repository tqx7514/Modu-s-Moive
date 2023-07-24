import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Responsive from "./Responsive";
import Button from "./Button";
import LogoImage from "../../public/Logo.png";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  z-index: 9999;
`;

const Wrapper = styled(Responsive)`
  position: relative;
  width: 520px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }

  a{
    position: relative;
    display: block;
    height: 40px;
    padding: 0 24px 20px;
    font-size: 14px;
    line-height: 40px;
    transition: .3s ease;
  }

  .border{
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    background: #ff1744;
    transition: .3s ease;
    opacity: 0;
  }

  a:nth-child(1).active~.border{
    width: 75.77px;
    left: 15px;
    opacity: 1;
  }
  a:nth-child(2).active~.border{
    width: 75.77px;
    left: 90.77px;
    opacity: 1;
  }
  a:nth-child(3).active~.border{
    width: 86.64px;
    left: 166.54px;
    opacity: 1;
  }
  a:nth-child(4).active~.border{
    width: 86.64px;
    left: 253.18px;
    opacity: 1;
  }
  a:nth-child(5).active~.border{
    width: 86.64px;
    left: 339.82px;
    opacity: 1;
  }
  a:nth-child(6).active~.border{
    width: 75.77px;
    left: 426.46px;
    opacity: 1;
  }
  
  a:nth-child(1):hover~.border{
    width: 75.77px;
    left: 15px;
    opacity: 1;
  }
  a:nth-child(2):hover~.border{
    width: 75.77px;
    left: 90.77px;
    opacity: 1;
  }
  a:nth-child(3):hover~.border{
    width: 86.64px;
    left: 166.54px;
    opacity: 1;
  }
  a:nth-child(4):hover~.border{
    width: 86.64px;
    left: 253.18px;
    opacity: 1;
  }
  a:nth-child(5):hover~.border{
    width: 86.64px;
    left: 339.82px;
    opacity: 1;
  }
  a:nth-child(6):hover~.border{
    width: 75.77px;
    left: 426.46px;
    opacity: 1;
  }

 
`;


const LogoWrapper = styled(Responsive)`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 5rem;
  margin-top: 0.6rem;
`;

const Spacing = styled.div`
  margin-left: 0.5rem;
`;

const Spacer = styled.div`
  height: 150px;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const UserHi = styled.div`
  font-weight: normal;
`;


const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <LogoWrapper>
          <div>
            <a href="#">페이스북</a>
            <a href="#">유튜브</a>
            <a href="#">인스타그램</a>
          </div>
          <Link to="/" className="logo">
            <Logo src={LogoImage} alt="Logo" />
          </Link>
          {user ? (
            <div className="right">
              <Spacing />
              <Button onClick={onLogout}>로그아웃</Button>
              <Spacing />
              <Button to={`/mypage/${user.id}`}>마이페이지</Button>
              <Spacing />
              {user.grade > 1 && <Button to="/admin">관리자페이지</Button>}
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
              <Spacing />
              <Button to="/register">회원가입</Button>
            </div>
          )}
        </LogoWrapper>
        <Wrapper>
          <NavLink
            to="/ticket"
          >
            예매
          </NavLink>
          <NavLink
            to="/currentmovie"
          >
            영화
          </NavLink>
          <NavLink
            to="/cinema"
          >
            영화관
          </NavLink>
          <NavLink
            to="/event"
          >
            이벤트
          </NavLink>
          <NavLink
            to="/postlist"
          >
            게시판
          </NavLink>
          <NavLink
            to="/meet"
          >
            모임
          </NavLink>
          <div className="border"/>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
