import React from "react";
import styled from "styled-components";
import AdminEventListContainer from "../../containers/admin/event/AdminEventListContainer";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import AdminEventPaginationContainer from "../../containers/admin/event/AdminEventPaginationContainer";

const AdminEventPageTopBlock = styled.div``;

const AdminEventPageMidBlock = styled.div``;

const AdminEventPageBtmBlock = styled.div``;

const AdminEventPage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminEventListContainer />
      <AdminEventPaginationContainer />
    </div>
  );
};

export default AdminEventPage;
