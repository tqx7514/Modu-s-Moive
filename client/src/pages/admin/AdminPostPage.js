import React from "react";
import AdminPostViewerContainer from "../../containers/post/admin/AdminPostViewerContainer";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";

const AdminPostViewerPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminPostViewerContainer />
    </div>
  );
};

export default AdminPostViewerPage;
