import React from "react";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminPostViewerContainer from "../../containers/admin/post/AdminPostViewerContainer";
import AdminPostCommentListContainer from "../../containers/admin/post/AdminPostCommentListContainer";

const AdminPostPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminPostViewerContainer />
      <AdminPostCommentListContainer />
    </div>
  );
};

export default AdminPostPage;
