export const meetDataRegion = ({ data }) => {
  console.log("데이터의 data", data);
  const meetDataArray = [];

  data &&
    data.map((item) => {
      meetDataArray.push({
        id: item.region,
        label: item.region,
        value: item.count,
        color: "hsl(104, 70%, 50%)",
      });
    });

  return meetDataArray;
};
