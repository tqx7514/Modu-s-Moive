import React from "react";
import styled, {css} from "styled-components";
import { useLocation } from "react-router-dom";

const NavReserveUl = styled.ul`
    width: 76px;
    height: 100%;
`

const NavReserveLi = styled.li`
    width: 100%;
    height: calc(100% / 4);
    padding-top: 80px;
    border-bottom: 1px solid #666;
    background: #fff;
    list-style: none;
    text-align: center;
    line-height: 1.5;
    &:last-child{
        border-bottom: none;
    }
    ${props =>
        props.active && css`
            background: #FF243E;
            color: #fff;
        `
    }
`;

const ReserveNav = () => {
    const location = useLocation();
    return(
        <NavReserveUl>
            <NavReserveLi active={location.pathname === "/ticket"}>
                01
                <br/>
                상영시간
            </NavReserveLi>
            <NavReserveLi active={location.pathname === "/ticket/PersonSeat"}>
                02
                <br/>
                인원/좌석
            </NavReserveLi>
            <NavReserveLi>
                03
                결제
            </NavReserveLi>
            <NavReserveLi>
                04
                결제완료
            </NavReserveLi>
        </NavReserveUl>
    )
}

export default ReserveNav;