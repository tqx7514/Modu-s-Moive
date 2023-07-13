import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventMovieCompots from "../../components/event/EventMovieCompots";
import { listEvents } from "../../modules/eventlist";

const EventMovieContainer = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => ({
    eventlist: state.eventlist.event || [],
  }));

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  return (
    <div>
      <EventMovieCompots events={events} />
    </div>
  );
};

export default EventMovieContainer;
