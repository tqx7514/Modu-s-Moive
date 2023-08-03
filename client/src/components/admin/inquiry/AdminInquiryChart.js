import { styled } from "styled-components";
import { Box } from "@mui/material";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
import BarChart from "../chart/inquiryCategoryChart";
import { inquiryDataCategory } from "../../../data/inquiryData";
import { useEffect } from "react";
import { inquiryCategory } from "../../../lib/api/admin/adminchart";
import { useState } from "react";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";

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
    <AdminBottomRightBlock>
      <div className="title">
        <h3>문의 비율</h3>
      </div>
      <Box height="40vh">
        <BarChart isDashboard={true} data={datas} />
      </Box>
    </AdminBottomRightBlock>
  );
};

export default AdminInquiryChart;
