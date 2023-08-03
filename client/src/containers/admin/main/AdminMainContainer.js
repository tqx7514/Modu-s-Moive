import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { userGender } from "../../../lib/api/admin/adminchart";
import { userDataGender } from "../../../data/userData";
import PieChart from "../../../components/admin/chart/userGenderChart";
import AdminSales from "../../../components/admin/main/AdminSales";
import AdminBottomLeft from "../../../components/admin/main/AdminBottomLeft";
import AdminBottomRight from "../../../components/admin/main/AdminBottomRight";
import styled from "styled-components";

const AdminMainContainer = () => {
  return (
    <div>
      <AdminSales />
      <BottomBlock>
        <div>
          <AdminBottomLeft />
        </div>
        <div>
          <AdminBottomRight />
        </div>
      </BottomBlock>
    </div>
  );
};

const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 49%;
  }
`;

export default AdminMainContainer;
