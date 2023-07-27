import React from "react";
import Responsive from "../../components/common/Responsive";
import AdminEventWriteContainer from "../../containers/admin/event/AdminEventWriteContainer";
import AdminEventWriteButtonContainer from "../../containers/admin/event/AdminEventWriteButtonContainer";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";

const AdminEventWritePage = () => {
  return (
    <Responsive>
      <AdminHeaderContainer />
      <AdminEventWriteContainer />
      <AdminEventWriteButtonContainer />
    </Responsive>
  );
};

export default AdminEventWritePage;
