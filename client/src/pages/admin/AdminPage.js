import React, { useEffect } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import styled from "styled-components";
import LineChart from "../../components/admin/chart/LineChart";
import AdminHeaderContainer from "../../containers/common/admin/AdminHeaderContainer";
import Responsive from "../../containers/common/Responsive";
import PieChart from "../../components/admin/chart/userGenderChart";
import AdminMainContainer from "../../containers/admin/main/AdminMainContainer";

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
      {/* <AdminBody>관리자 페이지</AdminBody>
      <Box height="25vh">
        <PieChart data={data} />
      </Box> */}
      <AdminBody>
        <AdminMainContainer />
      </AdminBody>
    </AdminPageWrapper>
  );
};

export default AdminPage;
