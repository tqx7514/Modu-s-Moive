import React from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";

const NavReserveUl = styled.ul`
  width: 76px;
  height: 100%;
`;

const NavReserveCont = styled.div`
  position: absolute;
  left: 69px;
  top: 0;
  display: none;
  width: 190px;
  height: 100%;
  padding-left: 40px;
  background: #ff243e;
  text-align: left;
  font-size: 12px;
  letter-spacing: -0.9px;
  z-index: 999;

  ul > li {
    list-style: initial;
    margin-bottom: 10px;

  }
`;

const NavReserveLi = styled.li`
  position: relative;
  width: 100%;
  height: calc(100% / 4);
  padding-top: 80px;
  border-bottom: 1px solid #666;
  background: #fff;
  list-style: none;
  text-align: center;
  line-height: 1.5;
  &:last-child {
    border-bottom: none;
  }
  ${(props) =>
    props.active === "true" &&
    css`
      background: #ff243e;
      color: #fff;
      cursor: pointer;
      &:hover {
        ${NavReserveCont} {
          display: flex;
          align-items: center;
        }
      }
    `}
`;

const ReserveNav = ({ data, adult, teenager }) => {
  const location = useLocation();
  const timeContent = data.time.cinema === undefined ? (
    <ul>
      <li>{data.movie ? data.movie.movie_name : ''}</li>
      <li>{data && data.cinema}</li>
      <li>{data && data.date}</li>
      <li></li>
    </ul>
  ) : (
    <ul>
      <li>{data.time.movie_name}</li>
      <li>
        {data.time ? `${data.time.cinema} ${data.time.room}관` : ''}
      </li>
      <li>{data.date}</li>
      <li>
        {
          data.time ? 
          `${data.time.start} ~ ${data.time.end}` : '' 
        }
      </li>
    </ul>
  )
  return (
    <NavReserveUl>
      <NavReserveLi active={String(location.pathname === "/ticket")}>
        01
        <br />
        상영시간
        <NavReserveCont>
            {timeContent}
        </NavReserveCont>
      </NavReserveLi>
      <NavReserveLi active={String(location.pathname === "/ticket/PersonSeat")}>
        02
        <br />
        인원/좌석
        <NavReserveCont>
          <ul>
            <li>
              {/* {adult.name}({adult.number}), {teenager.name}({teenager.number}) */}
            </li>
            <li></li>
          </ul>
        </NavReserveCont>
      </NavReserveLi>
      <NavReserveLi>
        03 결제
        <NavReserveCont>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </NavReserveCont>
      </NavReserveLi>
      <NavReserveLi>04 결제완료</NavReserveLi>
    </NavReserveUl>
  );
};

export default ReserveNav;
