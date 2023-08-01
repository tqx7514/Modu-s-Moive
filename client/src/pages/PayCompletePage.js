import React from 'react'
import HeaderContainer from '../containers/common/HeaderContainer';
import Footer from '../components/common/Footer';
import TicketWrap from '../components/ticket/TicketWrap';
import ReserveNavContainer from '../containers/ticket/ReserveNavContainer';
import styled from 'styled-components';
import { Title } from '../components/ticket/step03/SelectPay';
import { useSelector } from 'react-redux';
import PayCompContainer from '../containers/ticket/stpe03/PayCompContainer';


const PayComp = styled.div`
  width: 100%;
  height: 100%;
  background: #f8f8f8;
`;

const CompleteWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;

  h3{
    font-size: 140px;
    font-weight: lighter;
  }
`;
const PayCompletePage = () => {
  return (
    <div>
      <HeaderContainer />
      <TicketWrap>
        <ReserveNavContainer/>
        <PayComp>
          <Title>결제완료</Title>
          <CompleteWrap>
            <PayCompContainer/>
          </CompleteWrap>
        </PayComp>
      </TicketWrap>
      <Footer />
    </div>
  )
}

export default PayCompletePage;