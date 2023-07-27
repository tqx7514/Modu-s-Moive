import React from "react";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminPostListContainer from "../../containers/admin/posts/AdminPostListContainer";

const AdminPostListPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminPostListContainer />
    </div>
  );
};

export default AdminPostListPage;
