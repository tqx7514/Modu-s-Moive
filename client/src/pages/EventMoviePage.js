import React, { useState, useCallback } from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import EventCategory from "../components/event/EventCategory";
import EventMovieContainer from "../containers/event/EventMovieContainer";

const EventMoviePage = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <div>
            <HeaderContainer />
            <EventCategory category={category} onSelect={onSelect} />
            <EventMovieContainer category={category} />
        </div>
    );
};

export default EventMoviePage;