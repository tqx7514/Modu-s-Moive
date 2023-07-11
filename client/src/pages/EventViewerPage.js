import React, { useState, useCallback } from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventCategory from "../components/event/EventCategory";
import EventViewerContainer from "../containers/event/EventViewerContainer";

const EventViewerPage = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <div>
      <HeaderContainer />
      <EventCategory category={category} onSelect={onSelect} />
      <EventViewerContainer category={category} />
    </div>
  );
};

export default EventViewerPage;
