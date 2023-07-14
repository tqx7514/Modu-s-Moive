import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Responsive from "../Responsive";
import Button from "../Button";
import LogoImage from "../../../public/Logo.png";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: lightgray;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const LogoWrapper = styled(Responsive)`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  height: 9rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const UserHi = styled.div`
  font-weight: normal;
`;

const activeStyle = {
  color: "green",
  fontSize: 21,
  fontWeight: "bold",
};

const AdminHeader = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <LogoWrapper>
          <Link to="/" className="logo">
            <Logo src={LogoImage} alt="Logo" />
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>
                {user.name}
                <UserHi>님 안녕하세요!</UserHi>
              </UserInfo>
              <Spacing />
              <Button onClick={onLogout}>로그아웃</Button>
              <Spacing />
              <Button to="/">유저페이지</Button>
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
            to="/currentmovie"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            상영중인 영화
          </NavLink>
          <NavLink
            to="/ticket"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            예매
          </NavLink>
          <NavLink
            to="/cinema"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            영화관 위치
          </NavLink>
          <NavLink
            to="/admin/event"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            EVENT관리
          </NavLink>
          <NavLink
            to="/postlist"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시판
          </NavLink>
          <NavLink
            to="/gathering"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            모임
          </NavLink>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default AdminHeader;
