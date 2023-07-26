import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import MeetListContainer from "../containers/meet/MeetListContainer";
import PaginationContainer from "../containers/meet/MeetPaginationContainer";
import Footer from "../components/common/Footer";

const MeetListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <MeetListContainer />
      <PaginationContainer />
      <Footer />
    </div>
  );
};

export default MeetListPage;
