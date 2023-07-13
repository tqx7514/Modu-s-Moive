import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventPromoteCompots from "../../components/event/EventPromoteCompots";
import { listEvents } from "../../modules/eventlist";

const EventPromoteContainer = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => ({
    eventlist: state.eventlist.event || [],
  }));

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  return (
    <div>
      <EventPromoteCompots events={events} />;
    </div>
  );
};

export default EventPromoteContainer;
