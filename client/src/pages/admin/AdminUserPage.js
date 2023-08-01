import React from "react";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminUserListContainer from "../../containers/admin/user/AdminUserListContainer";
import { AdminBody } from "./AdminMovieTimePage";

const AdminUserPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminUserListContainer />
      </AdminBody>
    </div>
  );
};

export default AdminUserPage;
