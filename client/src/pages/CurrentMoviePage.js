import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import MovieContainer from "../containers/movie/MovieContainer";

const CurrentMoviePage = () => {
    return (
        <div>
            <HeaderContainer/>
            <MovieContainer/>
        </div>
    );
};

export default CurrentMoviePage;