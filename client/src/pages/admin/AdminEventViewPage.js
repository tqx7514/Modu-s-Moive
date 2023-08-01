import React from "react";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminEventViewerContainer from "../../containers/admin/event/AdminEventViewerContainer";
import { AdminBody } from "./AdminMovieTimePage";

const AdminEventViewPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminEventViewerContainer />
      </AdminBody>
    </div>
  );
};
export default AdminEventViewPage;
