import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import TicketWrap from '../components/ticket/TicketWrap';
import StepSecondContainer from '../containers/ticket/step02/StepSecondContainer';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PersonSeat = () => {
    const { user } = useSelector((state) => state.user);
    if (!user) {
        return <Navigate to='/login' state={{ from: '/ticket/PersonSeat' }} />;
    }
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