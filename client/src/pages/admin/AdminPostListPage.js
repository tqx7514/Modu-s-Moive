import React from "react";
import AdminHeader from "../../components/common/admin/AdminHeader";
import AdminPostListContainer from "../../containers/posts/admin/AdminPostListContainer";

const AdminPostListPage = () => {
  return (
    <div>
      <AdminHeader />
      <AdminPostListContainer />
    </div>
  );
};

export default AdminPostListPage;
