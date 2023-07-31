export const userDataGender = ({ a, b }) => [
  {
    id: "남자",
    label: "남자",
    value: a,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "여자",
    label: "여자",
    value: b,
    color: "hsl(291, 70%, 50%)",
  },
];

export const userDataAge = ({ ageData }) => [
  {
    id: "20세이하",
    label: "20세이하",
    value: ageData && ageData[0],
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "20대",
    label: "20대",
    value: ageData && ageData[1],
    color: "hsl(49, 70%, 50%)",
  },
  {
    id: "30대",
    label: "30대",
    value: ageData && ageData[2],
    color: "hsl(214, 70%, 50%)",
  },
  {
    id: "40대",
    label: "40대",
    value: ageData && ageData[3],
    color: "hsl(289, 70%, 50%)",
  },
  {
    id: "50대",
    label: "50대",
    value: ageData && ageData[4],
    color: "hsl(79, 70%, 50%)",
  },
  {
    id: "60대 이상",
    label: "60대",
    value: ageData && ageData[5],
    color: "hsl(55, 70%, 50%)",
  },
];
