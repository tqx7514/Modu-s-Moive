import React from "react";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminPostViewerContainer from "../../containers/admin/post/AdminPostViewerContainer";
import { AdminBody } from "./AdminMovieTimePage";
import AdminPostCommentListContainer from "../../containers/admin/post/AdminPostCommentListContainer";

const AdminPostPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminPostViewerContainer />
        <AdminPostCommentListContainer />
      </AdminBody>
    </div>
  );
};

export default AdminPostPage;
