import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import TicketWrap from '../components/ticket/TicketWrap';
import StepSecondContainer from '../containers/ticket/step02/StepSecondContainer';

const PersonSeat = () => {
    return (
        <div>
            <HeaderContainer/>
            <TicketWrap>
                <StepSecondContainer/>
            </TicketWrap>
        </div>
    );
};

export default PersonSeat;