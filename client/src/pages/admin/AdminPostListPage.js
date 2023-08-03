import React from "react";
// import AdminPostListContainer from "../../containers/posts/admin/AdminPostListContainer";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminPostListContainer from "../../containers/admin/posts/AdminPostListContainer";
import { AdminBody } from "./AdminMovieTimePage";
import PostPaginationContainer from "../../containers/posts/PostPaginationContainer";

const AdminPostListPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminPostListContainer />
      </AdminBody>
    </div>
  );
};

export default AdminPostListPage;
