import { styled } from "styled-components";
import { AdminChartTitle } from "../../common/admin/AdminTitle";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import LineChart from "../chart/postDateChart";
import { postsDate } from "../../../lib/api/admin/adminchart";
import { postDataDate } from "../../../data/postData";
import { AdminBottomRightBlock } from "../main/AdminBottomRight";

const AdminPostChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        const result = await postsDate();
        console.log("게시글결과", result.data);
        setData(postDataDate(result.data));
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  return (
    <AdminBottomRightBlock>
      <div className="title">
        <h3>주간 게시글</h3>
      </div>
      {data && (
        <Box height="250px">
          <LineChart data={data} />
        </Box>
      )}
    </AdminBottomRightBlock>
  );
};

export default AdminPostChart;
