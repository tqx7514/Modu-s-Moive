import { styled } from "styled-components";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
import { useState, useEffect } from "react";
import { userGender } from "../../../lib/api/admin/adminchart";
import { userDataGender } from "../../../data/userData";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import PieChart from "../chart/userGenderChart";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";

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
    <AdminBottomRightBlock>
      <div className="title">
        <h3>가입자 성비</h3>
      </div>
      <Box height="40vh">
        <PieChart data={genderData} />
      </Box>
    </AdminBottomRightBlock>
  );
};

export default AdminUserGenderChart;
