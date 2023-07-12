import React from "react";
import styled, {css} from "styled-components";
import { useLocation } from "react-router-dom";

const NavReserveUl = styled.ul`
    width: 76px;
    height: 100%;
`

const NavReserveCont = styled.div`
    position: absolute;
    left: 72px;
    top: 0;
    display: none;
    width: 172px;
    height: 100%;
    padding-left: 40px;
    background: #FF243E;
    z-index: 999;
    
    ul > li{
        list-style: initial;
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
    &:last-child{
        border-bottom: none;
    }
    ${props =>
        props.active === 'true' && css`
            background: #FF243E;
            color: #fff;
            cursor: pointer;
            &:hover{
                ${NavReserveCont}{
                    display: flex;
                    align-items: center;
                }
            }
        `
    }
`;


const ReserveNav = ({data}) => {
    const location = useLocation();
    return(
        <NavReserveUl>
            <NavReserveLi active={String(location.pathname === "/ticket")}>
                01
                <br/>
                상영시간
                <NavReserveCont>
                    <ul>
                        <li>{data && data.cinema}</li>
                        <li>{data.movie ? data.movie.movie_name : ''}</li>
                        <li>{data && data.date}</li>
                    </ul>
                </NavReserveCont>
            </NavReserveLi>
            <NavReserveLi active={String(location.pathname === "/ticket/PersonSeat")}>
                02
                <br/>
                인원/좌석
                <NavReserveCont>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </NavReserveCont>
            </NavReserveLi>
            <NavReserveLi>
                03
                결제
                <NavReserveCont>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </NavReserveCont>
            </NavReserveLi>
            <NavReserveLi>
                04
                결제완료
            </NavReserveLi>
        </NavReserveUl>
    )
}

export default ReserveNav;