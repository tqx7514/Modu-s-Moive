import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventList from "../../components/event/EventListCompots";
import { listEvents } from "../../modules/eventlist";

const EventContainer = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => ({
    eventlist: state.eventlist.event || [],
  }));

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default EventContainer;
