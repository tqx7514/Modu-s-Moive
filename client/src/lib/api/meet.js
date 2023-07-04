import client from "./client";

export const writeMeet = ({ title, body, tags, userId }) => {
  console.log("글쓰기 프론트api입니다");
  return client.post("/meet/write", { title, body, tags, userId });
};

export const readMeet = (meetNum) => {
  return client.get(`/meet/detail/${meetNum}`);
};

export const Meetlist = ({ tag, userId, page }) => {
  console.log("프론트 api까지는옴~~~~~~~~~~~~~~", tag, userId, page);
  return client.get(`/meet/list`, {
    params: { tag, userId, page },
  });
};
