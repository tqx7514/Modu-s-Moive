import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import TicketWrap from "../components/ticket/TicketWrap";
import StepFirstContainer from "../containers/ticket/StepFirstContainer";
import ReserveNavContainer from "../containers/ticket/ReserveNavContainer";
import SelectDate from "../components/ticket/step1/SelectDate";
import SelectMovieContainer from "../containers/ticket/SelectMovieContainer";
import SelectDateContainer from "../containers/ticket/SelectDateContainer";



const TicketPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <TicketWrap>
                <ReserveNavContainer/>
                <StepFirstContainer/>
                <SelectMovieContainer/>
                <SelectDateContainer/>
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