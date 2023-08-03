import React, { useEffect } from "react";
import styled from "styled-components";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import Responsive from "../../containers/common/Responsive";
import AdminMainContainer from "../../containers/admin/main/AdminMainContainer";
import { AdminBody } from "./AdminMovieTimePage";

const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* background: gray; */
`;

const AdminPage = () => {
  return (
    <AdminPageWrapper>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminMainContainer />
      </AdminBody>
    </AdminPageWrapper>
  );
};

export default AdminPage;
