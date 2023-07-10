import React from "react";
import EventViewerMovieContainer from "../containers/event/EventViewerMovieContainer";
import HeaderContainer from "../containers/common/HeaderContainer";

const EventViewerPage = () => {
  return (
    <div>
      <HeaderContainer />
      <EventViewerMovieContainer />;
    </div>
  );
};

export default EventViewerPage;
