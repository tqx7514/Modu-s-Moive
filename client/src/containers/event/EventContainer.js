import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../actions/eventActions";
import EventList from "../../components/event/EventList";

const EventContainer = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events);

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    return <EventList events={events} />;
};

export default EventContainer;