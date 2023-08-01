import React from "react";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminPostViewerContainer from "../../containers/admin/post/AdminPostViewerContainer";
import { AdminBody } from "./AdminMovieTimePage";

const AdminPostPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminPostViewerContainer />
      </AdminBody>
    </div>
  );
};

export default AdminPostPage;
