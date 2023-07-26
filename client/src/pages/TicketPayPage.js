import React from "react";
import SelectPayContainer from "../containers/ticket/stpe03/SelectPayContainer";
import HeaderContainer from "../containers/common/HeaderContainer";
import TicketWrap from "../components/ticket/TicketWrap";

const TicketPayPage = () => {
  return (
    <div>
      <HeaderContainer />
      <TicketWrap>
        <SelectPayContainer />
      </TicketWrap>
    </div>
  );
};

export default TicketPayPage;
