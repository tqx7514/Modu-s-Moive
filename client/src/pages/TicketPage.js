import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import TicketWrap from "../components/ticket/TicketWrap";
import StepFirst from "../components/ticket/StepFirst";
import StepFirstContainer from "../containers/ticket/StepFirstContainer";



const TicketPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <TicketWrap>
                <StepFirstContainer/>
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