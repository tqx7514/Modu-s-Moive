import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import MeetListContainer from "../containers/meet/MeetListContainer";
import PaginationContainer from "../containers/meet/MeetPaginationContainer";

const MeetListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <MeetListContainer />
      <PaginationContainer />
    </div>
  );
};

export default MeetListPage;
