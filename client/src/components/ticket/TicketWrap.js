import React from "react";
import styled from "styled-components";

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
    background: #fff;
`;

const TicketWrap = ({children}) => {
    return(
        <TicketWrapBlock>
            <ReserveWrap>
                {children}
            </ReserveWrap>
        </TicketWrapBlock>
    )
}

export default TicketWrap;