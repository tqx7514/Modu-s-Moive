import { tokens } from "../theme";

export const mainDataMonth = ({ data }) => [
  {
    id: "일별 게시글",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: data && data[0].date,
        y: data && data[0].count,
      },
      {
        x: data && data[1].date,
        y: data && data[1].count,
      },
      {
        x: data && data[2].date,
        y: data && data[2].count,
      },
      {
        x: data && data[3].date,
        y: data && data[3].count,
      },
      {
        x: data && data[4].date,
        y: data && data[4].count,
      },
      {
        x: data && data[5].date,
        y: data && data[5].count,
      },
      {
        x: data && data[6].date,
        y: data && data[6].count,
      },
    ],
  },
];
