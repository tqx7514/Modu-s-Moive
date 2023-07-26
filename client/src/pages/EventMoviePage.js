import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventMovieContainer from "../containers/event/EventMovieContainer";
import Footer from "../components/common/Footer";

const EventMoviePage = () => {
  return (
    <div>
      <HeaderContainer />
      <EventMovieContainer />
      <Footer />
    </div>
  );
};

export default EventMoviePage;
