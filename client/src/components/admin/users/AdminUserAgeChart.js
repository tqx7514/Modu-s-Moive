import { styled } from "styled-components";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import PieChart from "../chart/userGenderChart";
import { userDataAge } from "../../../data/userData";
import { useEffect, useState } from "react";
import { userAge } from "../../../lib/api/admin/adminchart";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";

const AdminUserAgeChart = () => {
  const [ageData, setAgeData] = useState(null);
  useEffect(() => {
    const data = async () => {
      try {
        const result = await userAge();
        console.log("나이 결과", result.data);
        setAgeData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);
  const genderData = userDataAge({ ageData });
  return (
    <AdminBottomRightBlock>
      <div className="title">
        <h3>세대별 가입자</h3>
      </div>
      <Box height="40vh">
        <PieChart data={genderData} />
      </Box>
    </AdminBottomRightBlock>
  );
};

export default AdminUserAgeChart;
