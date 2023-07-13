import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventOtherCompots from "../../components/event/EventOtherCompots";
import { listEvents } from "../../modules/eventlist";

const EventOtherContainer = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => ({
    eventlist: state.eventlist.event || [],
  }));

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  return (
    <div>
      <EventOtherCompots events={events} />;
    </div>
  );
};

export default EventOtherContainer;
