import React from "react";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminInquiryContainer from "../../containers/admin/inquiry/AdminInquiryContainer";
import { AdminBody } from "./AdminMovieTimePage";

const AdminInquiryPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminInquiryContainer />
      </AdminBody>
    </div>
  );
};

export default AdminInquiryPage;
