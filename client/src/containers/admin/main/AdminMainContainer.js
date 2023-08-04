import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mainIncome, userGender } from "../../../lib/api/admin/adminchart";
import { userDataGender } from "../../../data/userData";
import PieChart from "../../../components/admin/chart/userGenderChart";
import AdminSales from "../../../components/admin/main/AdminSales";
import AdminBottomLeft from "../../../components/admin/main/AdminBottomLeft";
import AdminBottomRight from "../../../components/admin/main/AdminBottomRight";
import styled from "styled-components";

const AdminMainContainer = () => {
  const [income, setIncome] = useState(0);
  const [audience, setAudience] = useState(0);
  const [theater, setTheater] = useState(null);
  // console.log("income", income);

  useEffect(() => {
    const func = async () => {
      try {
        const result = await mainIncome();
        console.log("결과", result.data.totalIncome);
        setIncome(result.data.totalIncome);
        setAudience(result.data.totalAudience);
        setTheater(result.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);
  return (
    <div>
      <AdminSales income={income} audience={audience} theater={theater} />
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
