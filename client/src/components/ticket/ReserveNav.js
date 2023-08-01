import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { useSelector } from "react-redux";
import classNames from "../../../node_modules/classnames/index";

const NavReserveUl = styled.ul`
  width: 76px;
  height: 100%;
`;

const NavReserveCont = styled.div`
  position: absolute;
  left: 76px;
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
  width: 76px;
  height: calc(100% / 4);
  padding-top: 80px;
  border-right: 1px solid #666;
  border-bottom: 1px solid #666;
  background: #fff;
  list-style: none;
  text-align: center;
  line-height: 1.5;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    ${NavReserveCont} {
      display: flex;
      align-items: center;
      background: #333;
      color: #fff;
    }
  }
  ${(props) =>
    props.active === "true" &&
    css`
      background: #ff243e;
      color: #fff;
      cursor: pointer;
      border-right: none;
      &:hover {
        ${NavReserveCont} {
          display: flex;
          align-items: center;
          background: #ff243e;
        }
      }
    `}
  &.prev {
    background: #333;
    color: #fff;
  }
`;

const ReserveNav = ({ data, person, seat, totalPrice }) => {
  const { discount } = useSelector(({ stepsecond }) => stepsecond);
  const { user } = useSelector(({ user }) => user);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  // 각 단계에 대한 경로 설정
  const stepPaths = [
    "/ticket",
    "/ticket/PersonSeat",
    "/ticket/pay",
    "/ticket/payComplete",
  ];

  // 현재 단계 계산 (activeStep)
  const activeStep =
    stepPaths.findIndex((stepPath) => currentPath === stepPath) + 1;

  // 이전 단계들을 추적하는 배열 (prevSteps)
  const [prevSteps, setPrevSteps] = useState([]);

  // activeStep이 변경될 때마다 prevSteps 업데이트
  useEffect(() => {
    if (activeStep > 1) {
      setPrevSteps(
        Array.from({ length: activeStep - 1 }, (_, index) => index + 1)
      );
    } else {
      setPrevSteps([]);
    }
  }, [activeStep]);

  const timeContent =
    data.time.cinema === undefined ? (
      <ul>
        <li>{data.movie ? data.movie.movie_name : ""}</li>
        <li>{data && data.cinema}</li>
        <li>
          {data && data.date} {data && data.day ? `(${data.day})` : "(오늘)"}
        </li>
        <li></li>
      </ul>
    ) : (
      <ul>
        <li>{data.time.movie_name}</li>
        <li>{data.time ? `${data.time.cinema} ${data.time.room}관` : ""}</li>
        <li>
          {data.date} {data && data.day ? `(${data.day})` : "(오늘)"}
        </li>
        <li>{data.time ? `${data.time.start} ~ ${data.time.end}` : ""}</li>
      </ul>
    );

  const personContent = person && person?.slice(0).join(", ");
  const seatContent = seat?.slice(0).join(", ");
  const formatPrice = totalPrice?.toLocaleString();
  const totalPriceNumber = parseInt(totalPrice, 10);
  const formatTotalPrice = (
    totalPriceNumber - `${discount ? discount : 0}`
  ).toLocaleString();
  return (
    <NavReserveUl>
      <NavReserveLi
        active={String(location.pathname === "/ticket")}
        className={classNames({
          active: activeStep === 1,
          prev: prevSteps.includes(1),
        })}
        onClick={() => navigate("/ticket")}
      >
        01
        <br />
        상영시간
        <NavReserveCont>{timeContent}</NavReserveCont>
      </NavReserveLi>
      <NavReserveLi
        active={String(location.pathname === "/ticket/PersonSeat")}
        className={classNames({
          active: activeStep === 2,
          prev: prevSteps.includes(2),
        })}
        onClick={() => {
          navigate("/ticket/PersonSeat");
        }}
      >
        02
        <br />
        인원/좌석
        <NavReserveCont>
          <ul>
            <li>{personContent}</li>
            <li>{seatContent && seatContent}</li>
          </ul>
        </NavReserveCont>
      </NavReserveLi>
      <NavReserveLi
        active={String(location.pathname === "/ticket/pay")}
        className={classNames({
          active: activeStep === 3,
          prev: prevSteps.includes(3),
        })}
        onClick={() => {
          navigate("/ticket/pay");
        }}
      >
        03
        <br />
        결제
        <NavReserveCont>
          <ul>
            <li>{totalPrice && `티켓금액 ${formatPrice}원`}</li>
            <li>할인금액 {discount}원</li>
            <li>{totalPrice && `총합계 ${formatTotalPrice}원`}</li>
          </ul>
        </NavReserveCont>
      </NavReserveLi>
      <NavReserveLi
        active={String(location.pathname === "/ticket/payComplete")}
        className={classNames({
          active: activeStep === 4,
          prev: prevSteps.includes(4),
        })}
        onClick={() => {
          navigate("/ticket/payComplete");
        }}
      >
        04
        <br />
        결제완료
      </NavReserveLi>
    </NavReserveUl>
  );
};

export default ReserveNav;
