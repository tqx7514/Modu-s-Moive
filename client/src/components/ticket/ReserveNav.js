import React from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { useSelector } from "react-redux";

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
`;

const ReserveNav = ({
  data,
  adult,
  teenager,
  senior,
  disabled,
  seat,
  totalPrice,
}) => {
  const { user } = useSelector(({ user }) => user);
  const location = useLocation();
  const navigate = useNavigate();
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

  const seatContent = seat?.slice(0).join(", ");
  const formatPrice = totalPrice?.toLocaleString();
  const totalPriceNumber = parseInt(totalPrice, 10);
  // const formatTotalPrice = (totalPriceNumber - user.point).toLocaleString();
  return (
    <NavReserveUl>
      <NavReserveLi
        active={String(location.pathname === "/ticket")}
        onClick={() => navigate("/ticket")}
      >
        01
        <br />
        상영시간
        <NavReserveCont>{timeContent}</NavReserveCont>
      </NavReserveLi>
      <NavReserveLi active={String(location.pathname === "/ticket/PersonSeat")}>
        02
        <br />
        인원/좌석
        <NavReserveCont>
          <ul>
            <li>
              {adult.number > 0 && (
                <>
                  {adult.name}
                  {adult.number}
                  {teenager.number > 0 ||
                  senior.number > 0 ||
                  disabled.number > 0
                    ? ", "
                    : ""}
                </>
              )}
              {teenager.number > 0 && (
                <>
                  {teenager.name}
                  {teenager.number}
                  {senior.number > 0 || disabled.number > 0 ? ", " : ""}
                </>
              )}
              {senior.number > 0 && (
                <>
                  {senior.name}
                  {senior.number}
                  {disabled.number > 0 ? ", " : ""}
                </>
              )}
              {disabled.number > 0 && (
                <>
                  {disabled.name}
                  {disabled.number}
                </>
              )}
            </li>
            <li>{seatContent}</li>
          </ul>
        </NavReserveCont>
      </NavReserveLi>
      <NavReserveLi active={String(location.pathname === "/ticket/pay")}>
        03
        <br />
        결제
        <NavReserveCont>
          <ul>
            <li>{totalPrice && `티켓금액 ${formatPrice}원`}</li>
            {/* <li>할인금액 {user.point}원</li> */}
            <li>
              {
                // totalPrice && `총합계 ${formatTotalPrice}원`
                // totalPrice와 user.point의 숫자를 뺀 결과를 출력
              }
            </li>
          </ul>
        </NavReserveCont>
      </NavReserveLi>
      <NavReserveLi>
        04
        <br />
        결제완료
      </NavReserveLi>
    </NavReserveUl>
  );
};

export default ReserveNav;
