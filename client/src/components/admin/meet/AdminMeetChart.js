import { styled } from "styled-components";
import { meetRegion } from "../../../lib/api/admin/adminchart";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
import { useEffect, useState } from "react";
import { meetDataRegion } from "../../../data/meetData";
import PieChart from "../chart/meetRegionChart";

const AdminMeetChart = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const func = async () => {
      try {
        const result = await meetRegion();
        console.log("모임결과", result.data);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);
  const datas = meetDataRegion({ data });

  return (
    <AdminMeetChartBlock>
      <ChartBlock>
        <AdminChartTitle title="지역별 모임" />
      </ChartBlock>
      <Box height="100vh">
        <PieChart data={datas} />
      </Box>
    </AdminMeetChartBlock>
  );
};

const AdminMeetChartBlock = styled.div`
  flex: 1;
`;

const ChartBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 0rem 0 0 1rem;
`;

export default AdminMeetChart;
