import { styled } from "styled-components";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
import BarChart from "../chart/inquiryCategoryChart";
import { inquiryDataCategory } from "../../../data/inquiryData";
import { useEffect } from "react";
import { inquiryCategory } from "../../../lib/api/admin/adminchart";
import { useState } from "react";

const AdminInquiryChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        const result = await inquiryCategory();
        console.log("카테고리 결과", result.data);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    func();
  }, []);
  console.log("데이타~~~~", data);

  const datas = inquiryDataCategory({ a: data });
  return (
    <AdminInquiryChartBlock>
      <ChartBlock>
        <AdminChartTitle title="문의비율" />
      </ChartBlock>
      <Box height="40vh">
        <BarChart isDashboard={true} data={datas} />
      </Box>
    </AdminInquiryChartBlock>
  );
};

const AdminInquiryChartBlock = styled.div`
  flex: 1;
`;
const ChartBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0 1rem;
`;

export default AdminInquiryChart;
