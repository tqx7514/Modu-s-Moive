import client from "./client";

export const myMeet = ({ id, meetNum }) => {
  console.log("myMeet API , id========", id, meetNum);
  return client.get(`/mypage/meetlist/${id}`, {
    params: { meetNum },
  });
};
