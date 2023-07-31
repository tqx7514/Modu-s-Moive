import { styled } from "styled-components";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import LineChart from "../chart/postDateChart";
import { postsDate } from "../../../lib/api/admin/adminchart";
import { postDataDate } from "../../../data/postData";

const AdminPostChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        const result = await postsDate();
        console.log("게시글결과", result.data);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);
  const datas = postDataDate({ data });

  return (
    <AdminPostChartBlock>
      <ChartBlock>
        <AdminChartTitle title="주간 게시글" />
      </ChartBlock>
      <Box height="250px" m="-20px 0 0 0">
        <LineChart data={datas} />
      </Box>
    </AdminPostChartBlock>
  );
};

const AdminPostChartBlock = styled.div`
  flex: 1;
`;
const ChartBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0 1rem;
`;

export default AdminPostChart;
