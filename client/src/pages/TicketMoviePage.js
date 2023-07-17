import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import TicketWrap from "../components/ticket/TicketWrap";
import StepFirstContainer from "../containers/ticket/step01/StepFirstContainer";

const TicketMoviePage = () => {
    return (
        <div>
            <HeaderContainer/>
            <TicketWrap>
                <StepFirstContainer/>
            </TicketWrap>
        </div>
    );
};

export default TicketMoviePage;