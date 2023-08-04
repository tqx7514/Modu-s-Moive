import { tokens } from "../theme";

export const postDataDate = (data) => {
  const dailyData =
    data &&
    data.map((item) => ({
      x: item.date,
      y: item.count,
    }));

  const cumulativeData =
    data &&
    data.map((item) => ({
      x: item.date,
      y: item.cumulativeCount,
    }));

  return [
    {
      id: "일별 게시글",
      color: tokens("dark").greenAccent[500],
      data: dailyData,
    },
    {
      id: "누적 게시글",
      color: tokens("dark").blueAccent[300],
      data: cumulativeData,
    },
  ];
};
