import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import CinemaContainer from "../containers/cinema/CinemaContainer";
import Footer from "../components/common/Footer";

const CinemaPage = () => {
  return (
    <div>
      <HeaderContainer />
      <CinemaContainer />
      <Footer />
    </div>
  );
};

export default CinemaPage;
