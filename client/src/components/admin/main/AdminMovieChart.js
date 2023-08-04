import { styled } from "styled-components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { mainMovie } from "../../../lib/api/admin/adminchart";
import { mainDataMovie } from "../../../data/mainData";
import BarChart from "../chart/mainMovieChart";

const AdminMovieChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        const result = await mainMovie();
        console.log("영화차트 결과", result.data);
        setData(mainDataMovie(result.data));
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);
  //   console.log("data===", data[1]);
  return (
    <AdminMovieChartBlock>
      {data && (
        <Box height="40vh" width="250%">
          <BarChart isDashboard={true} data={data} />
        </Box>
      )}
    </AdminMovieChartBlock>
  );
};
const AdminMovieChartBlock = styled.div`
  /* margin-bottom: 10rem; */
  padding-bottom: 1rem;
`;

export default AdminMovieChart;
