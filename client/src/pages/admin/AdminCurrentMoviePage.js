import React from "react";
import AdminCurrentMovieContainer from "../../containers/admin/AdminCurrentMovieContainer";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";

const CurrentMoviePage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminCurrentMovieContainer />
    </div>
  );
};

export default CurrentMoviePage;
