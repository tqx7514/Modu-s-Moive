import React, { useState, useCallback } from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventCategory from "../components/event/EventCategory";
import EventOtherContainer from "../containers/event/EventOtherContainer";

const EventOtherPage = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <div>
            <HeaderContainer />
            <EventCategory category={category} onSelect={onSelect} />
            <EventOtherContainer category={category} />
        </div>
    );
};

export default EventOtherPage;