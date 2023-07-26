import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import TicketWrap from "../components/ticket/TicketWrap";
import StepFirstContainer from "../containers/ticket/step01/StepFirstContainer";
import Footer from "../components/common/Footer";

const TicketMoviePage = () => {
  return (
    <div>
      <HeaderContainer />
      <TicketWrap>
        <StepFirstContainer />
      </TicketWrap>
      <Footer />
    </div>
  );
};

export default TicketMoviePage;
