import React, { useEffect } from "react";
import styled from "styled-components";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import Responsive from "../../containers/common/Responsive";

const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
  background: gray;
`;

const AdminBody = styled(Responsive)`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  background: gray;
`;

const AdminPage = () => {
  return (
    <AdminPageWrapper>
      <AdminHeaderContainer />
      <AdminBody>관리자 페이지</AdminBody>
    </AdminPageWrapper>
  );
};

export default AdminPage;
