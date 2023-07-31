import { styled } from "styled-components";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
import { useState, useEffect } from "react";
import { userGender } from "../../../lib/api/admin/adminchart";
import { userDataGender } from "../../../data/userData";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import PieChart from "../chart/userGenderChart";

const AdminUserGenderChart = () => {
  const [Mcount, setMcount] = useState(0);
  const [Wcount, setWcount] = useState(0);

  useEffect(() => {
    const data = async () => {
      try {
        const result = await userGender();
        console.log("result", result.data.Mcount, result.data.Wcount);
        setMcount(result.data.Mcount);
        setWcount(result.data.Wcount);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);

  const genderData = userDataGender({ a: Mcount, b: Wcount });

  return (
    <AdminUserChartBlock>
      <ChartBlock>
        <AdminChartTitle title="유저 성비" />
      </ChartBlock>
      <Box height="40vh">
        <PieChart data={genderData} />
      </Box>
    </AdminUserChartBlock>
  );
};

const AdminUserChartBlock = styled.div`
  flex: 1;
`;

const ChartBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0 1rem;
`;

export default AdminUserGenderChart;
