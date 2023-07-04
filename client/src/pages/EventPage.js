import React, { useState, useCallback } from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventList from "../components/event/EventList";
import EventCategory from "../components/event/EventCategory";

const EventPage = () => {
    const [category, setCategory ] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <div>
            <HeaderContainer/>
            <EventCategory category={category} onSelect={onSelect} />
            <EventList category={category} />
        </div>
    );
};

export default EventPage;