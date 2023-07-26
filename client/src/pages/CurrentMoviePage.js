import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import MovieContainer from "../containers/movie/MovieContainer";
import Footer from "../components/common/Footer";

const CurrentMoviePage = () => {
  return (
    <div>
      <HeaderContainer />
      <MovieContainer />
      <Footer />
    </div>
  );
};

export default CurrentMoviePage;
