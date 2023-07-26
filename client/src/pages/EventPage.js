import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventContainer from "../containers/event/EventContainer";
import Footer from "../components/common/Footer";

const EventPage = () => {
  return (
    <div>
      <HeaderContainer />
      <EventContainer />
      <Footer />
    </div>
  );
};

export default EventPage;
