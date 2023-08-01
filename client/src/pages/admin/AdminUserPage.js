import React from "react";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminUserListContainer from "../../containers/admin/user/AdminUserListContainer";

const AdminUserPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminUserListContainer />
    </div>
  );
};

export default AdminUserPage;
