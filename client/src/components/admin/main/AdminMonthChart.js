import { styled } from "styled-components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { mainMonth } from "../../../lib/api/admin/adminchart";
import { mainDataMonth } from "../../../data/mainData";
import LineChart from "../chart/mainMonthChart";

const AdminMonthChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        const result = await mainMonth();
        console.log("month 결과", result.data);
        setData(mainDataMonth(result.data));
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  return (
    <AdminMonthChartBlock>
      {data && (
        <Box height="40vh" width="250%">
          <LineChart data={data} />
        </Box>
      )}
    </AdminMonthChartBlock>
  );
};

const AdminMonthChartBlock = styled.div``;

export default AdminMonthChart;
