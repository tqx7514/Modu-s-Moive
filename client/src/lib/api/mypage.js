import client from "./client";

export const myMeet = ({ id, meetNum }) => {
  console.log("myMeet API , id========", id, meetNum);
  return client.get(`/mypage/meetlist/${id}`, {
    params: { meetNum },
  });
};

export const myPost = ({ id, pages }) => {
  console.log("myBoard API, id========", id, pages);
  return client.get(`/mypage/postlist/${id}`, {
    params: { pages },
  });
};
