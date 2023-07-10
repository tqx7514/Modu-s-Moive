import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import TicketWrap from "../components/ticket/TicketWrap";
import ReserveNavContainer from "../containers/ticket/ReserveNavContainer";
import SelectCinemaContainer from "../containers/ticket/SelectCinemaContainer";
import SelectMovieContainer from "../containers/ticket/SelectMovieContainer";
import SelectDateContainer from "../containers/ticket/SelectDateContainer";



const TicketPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <TicketWrap>
                <ReserveNavContainer/>
                <SelectCinemaContainer/>
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