import React from "react";
import styled from "styled-components";
import ReserveNav from "./ReserveNav";

const TicketWrapBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #444;
    width: 100%;
    height: 990px;
`;

const ReserveWrap = styled.div`
    display: flex;
    width: 1280px;
    height: 870px;
`;

const TicketWrap = ({children}) => {
    return(
        <TicketWrapBlock>
            <ReserveWrap>
                <ReserveNav/>
                {children}
            </ReserveWrap>
        </TicketWrapBlock>
    )
}

export default TicketWrap;