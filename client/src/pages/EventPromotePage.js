import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventPromoteContainer from "../containers/event/EventPromoteContainer";
import Footer from "../components/common/Footer";

const EventPromotePage = () => {
  console.log("아아");
  return (
    <div>
      <HeaderContainer />
      <EventPromoteContainer />
      <Footer />
    </div>
  );
};

export default EventPromotePage;
