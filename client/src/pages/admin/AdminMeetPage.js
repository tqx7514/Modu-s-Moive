import React from "react";
import AdminMeetContainer from "../../containers/admin/meet/AdminMeetContainer";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import { AdminBody } from "./AdminMovieTimePage";

const AdminMeetPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminMeetContainer />
      </AdminBody>
    </div>
  );
};

export default AdminMeetPage;
