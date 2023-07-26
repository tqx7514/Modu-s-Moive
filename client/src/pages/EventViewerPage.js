import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventViewerContainer from "../containers/event/EventViewerContainer";
import Footer from "../components/common/Footer";

const EventViewerPage = () => {
  return (
    <div>
      <HeaderContainer />
      <EventViewerContainer />
      <Footer />
    </div>
  );
};

export default EventViewerPage;
