import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import Cinema from "../components/cinema/Cinema";

const CinemaPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <Cinema />
        </div>
    );
};

export default CinemaPage;