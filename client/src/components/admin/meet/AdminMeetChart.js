import { styled } from "styled-components";
import { meetRegion } from "../../../lib/api/admin/adminchart";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
import { useEffect, useState } from "react";
import { meetDataRegion } from "../../../data/meetData";
import PieChart from "../chart/meetRegionChart";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";

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
    <AdminBottomRightBlock>
      <div className="title">
        <h3>지역별 모임</h3>
      </div>
      <Box height="90vh" width="90%">
        <PieChart data={datas} />
      </Box>
    </AdminBottomRightBlock>
  );
};

export default AdminMeetChart;
