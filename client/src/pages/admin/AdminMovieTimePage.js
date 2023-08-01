import React from 'react'
import AdminMovieTimeContainer from '../../containers/admin/ticket/AdminMovieTimeContainer';
import AdminHeaderContainer from '../../containers/common/admin/AdminHeaderContainer';
import styled from 'styled-components';

export const AdminBody = styled.div`
  position: fixed;
  left: 280px;
  top: 50px;
  width: calc(100% - 280px);
  height: 100%;
  padding: 50px;
`;

const AdminMovieTimePage = () => {
  return (
    <div>
        <AdminHeaderContainer />
        <AdminBody>
          <AdminMovieTimeContainer />
        </AdminBody>
    </div>
  )
}

export default AdminMovieTimePage;