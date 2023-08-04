import { tokens } from "../theme";

export const mainDataMonth = (data) => {
  return [
    {
      id: "매출",
      color: tokens("dark").greenAccent[500],
      data:
        data &&
        data.map((item) => ({
          x: item.month,
          y: item.price,
        })),
    },
  ];
};

export const mainDataMovie = (data) => {
  return data.map((item, index) => ({
    category: item.movie,
    매출: item.price,
    매출Color: `hsl(${(index + 1 * 67) % 360}, 70%, 50%)`,
  }));
};
