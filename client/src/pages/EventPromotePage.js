import React, { useState, useCallback } from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventCategory from "../components/event/EventCategory";
import EventPromoteContainer from "../containers/event/EventPromoteContainer";


const EventPromotePage = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <div>
            <HeaderContainer />
            <EventCategory category={category} onSelect={onSelect} />
            <EventPromoteContainer category={category} />
        </div>
    );
};

export default EventPromotePage;