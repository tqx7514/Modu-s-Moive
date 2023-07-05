import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import TicketWrap from "../components/ticket/TicketWrap";
import StepFirstContainer from "../containers/ticket/StepFirstContainer";
import ReserveNavContainer from "../containers/ticket/ReserveNavContainer";
import SelectMovie from "../components/ticket/SelectMovie";
import SelectDate from "../components/ticket/SelectDate";
import SelectMovieContainer from "../containers/ticket/SelectMovieContainer";



const TicketPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <TicketWrap>
                <ReserveNavContainer/>
                <StepFirstContainer/>
                <SelectMovieContainer/>
                <SelectDate/>
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