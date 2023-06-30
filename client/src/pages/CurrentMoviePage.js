import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import MovieList from "../components/movie/MovieList";

const CurrentMoviePage = () => {
    return (
        <div>
            <HeaderContainer/>
            <MovieList/>
        </div>
    );
};

export default CurrentMoviePage;