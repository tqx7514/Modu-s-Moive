import React from "react";
import AdminCurrentMovieContainer from "../../containers/admin/movie/AdminCurrentMovieContainer"
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import { AdminBody } from "./AdminMovieTimePage";

const CurrentMoviePage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminCurrentMovieContainer />
      </AdminBody>
    </div>
  );
};

export default CurrentMoviePage;
