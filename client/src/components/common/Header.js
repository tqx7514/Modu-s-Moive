import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Responsive from "./Responsive";
import Button from "./Button";
import LogoImage from "../../public/Logo.png";
import { useLocation } from "../../../node_modules/react-router-dom/dist/index";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome/index";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "../../../node_modules/@fortawesome/free-brands-svg-icons/index";

const HeaderBlock = styled.div`
  position: absolute;
  width: 100%;
  background: white;
  z-index: 9999;

  &.main {
    z-index: 2;
    width: 100%;
    height: 194px;
    border-bottom: none;
    background: -moz-linear-gradient(
      top,
      rgba(29, 29, 31, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(29, 29, 31, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(29, 29, 31, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    color: #fff;

    .logoWrap {
      color: #656565;
    }
  }
`;

const NavWrap = styled.div`
  display: block;
  width: 100%;
  &.fixed {
    position: fixed;
    top: 0;
    background: #fff;
    color: #000;
  }
`;

const Wrapper = styled(Responsive)`
  position: relative;
  width: 520px;
  height: 55px;
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

  a {
    position: sticky;
    display: block;
    height: 40px;
    padding: 0 24px 20px;
    font-size: 14px;
    line-height: 40px;
    transition: 0.3s ease;
  }

  .border {
    position: absolute;
    left: 0;
    bottom: 3px;
    height: 2px;
    background: #ff1744;
    transition: 0.3s ease;
    opacity: 0;
  }

  a:nth-child(1).active ~ .border {
    width: 75.77px;
    left: 15px;
    opacity: 1;
  }
  a:nth-child(2).active ~ .border {
    width: 75.77px;
    left: 90.77px;
    opacity: 1;
  }
  a:nth-child(3).active ~ .border {
    width: 86.64px;
    left: 166.54px;
    opacity: 1;
  }
  a:nth-child(4).active ~ .border {
    width: 86.64px;
    left: 253.18px;
    opacity: 1;
  }
  a:nth-child(5).active ~ .border {
    width: 86.64px;
    left: 339.82px;
    opacity: 1;
  }
  a:nth-child(6).active ~ .border {
    width: 75.77px;
    left: 426.46px;
    opacity: 1;
  }

  a:nth-child(1):hover ~ .border {
    width: 75.77px;
    left: 15px;
    opacity: 1;
  }
  a:nth-child(2):hover ~ .border {
    width: 75.77px;
    left: 90.77px;
    opacity: 1;
  }
  a:nth-child(3):hover ~ .border {
    width: 86.64px;
    left: 166.54px;
    opacity: 1;
  }
  a:nth-child(4):hover ~ .border {
    width: 86.64px;
    left: 253.18px;
    opacity: 1;
  }
  a:nth-child(5):hover ~ .border {
    width: 86.64px;
    left: 339.82px;
    opacity: 1;
  }
  a:nth-child(6):hover ~ .border {
    width: 75.77px;
    left: 426.46px;
    opacity: 1;
  }
`;

const LogoWrapper = styled(Responsive)`
  position: relative;
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

    button, a{
      background: none;
      color: #000;
      padding: 0;
      font-size: 12px;
      font-weight: 400;
      color: #666;
    }
  }
`;

const Logo = styled.img`
position: absolute;
left: 50%;
top: 40%;
transform: translate(-50%, -50%);
  height: 5rem;
  margin-top: 0.6rem;
`;

const Spacing = styled.div`
  margin-left: 0.5rem;
`;

const Spacer = styled.div`
  height: 150px;

  &.main {
    background: -moz-linear-gradient(
      top,
      rgba(29, 29, 31, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(29, 29, 31, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(29, 29, 31, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const UserHi = styled.div`
  font-weight: normal;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 1rem; /* Add margin between the icons */
  }
`;

const Header = ({ user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(null);

  const scroll = () => {
    if (window.scrollY > 102) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
  });
  const location = useLocation();
  return (
    <>
      <HeaderBlock className={location.pathname === "/" ? "main" : ""}>
        <LogoWrapper className="logoWrap">
          <Icons>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#1d69ed" }} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#ff0000" }} />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#d123b1" }}
              />
            </a>
          </Icons>
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
        <NavWrap className={isScrolled === true ? "fixed" : ""}>
          <Wrapper>
            <NavLink to="/ticket">예매</NavLink>
            <NavLink to="/currentmovie">영화</NavLink>
            <NavLink to="/cinema">영화관</NavLink>
            <NavLink to="/event">이벤트</NavLink>
            <NavLink to="/postlist">게시판</NavLink>
            <NavLink to="/meet">모임</NavLink>
            <div className="border" />
          </Wrapper>
        </NavWrap>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
