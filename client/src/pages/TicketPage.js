import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import TicketWrap from "../components/ticket/TicketWrap";
import StepFirst from "../components/ticket/StepFirst";



const TicketPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <TicketWrap>
                <StepFirst/>
            </TicketWrap>
            <div>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
            </div>
        </div>
    );
};

export default TicketPage;