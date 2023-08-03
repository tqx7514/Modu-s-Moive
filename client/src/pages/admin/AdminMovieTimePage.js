import React from "react";
import AdminMovieTimeContainer from "../../containers/admin/ticket/AdminMovieTimeContainer";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import styled from "styled-components";

export const AdminBody = styled.div`
  position: fixed;
  left: 280px;
  top: 50px;
  width: calc(100% - 280px);
  height: calc(100vh - 50px);
  overflow-y: auto;
  padding: 50px;
  background-color: #f2f2f2;
`;

const AdminMovieTimePage = () => {
  return (
    <div>
      <AdminHeaderContainer />
      <AdminBody>
        <AdminMovieTimeContainer />
      </AdminBody>
    </div>
  );
};

export default AdminMovieTimePage;
