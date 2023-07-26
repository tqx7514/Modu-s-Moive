import React from "react";
import Responsive from "../../components/common/Responsive";
import AdminEventWriteContainer from "../../containers/admin/event/AdminEventWriteContainer";
import AdminEventWriteButtonContainer from "../../containers/admin/event/AdminEventWriteButtonContainer";

const AdminEventWritePage = () => {
  return (
    <Responsive>
      <AdminEventWriteContainer />
      <AdminEventWriteButtonContainer />
    </Responsive>
  );
};

export default AdminEventWritePage;
