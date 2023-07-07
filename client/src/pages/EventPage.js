import React, { useState, useCallback } from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventCategory from "../components/event/EventCategory";
import EventContainer from "../containers/event/EventContainer";

const EventPage = () => {
    const [category, setCategory ] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <div>
            <HeaderContainer/>
            <EventCategory category={category} onSelect={onSelect} />
            <EventContainer category={category} />
        </div>
    );
};

export default EventPage;