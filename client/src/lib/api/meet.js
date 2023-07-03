import client from "./client";

export const writeMeet = ({ title, body, tags, userId }) => {
  console.log("글쓰기 프론트api입니다");
  return client.post("/meet/write", { title, body, tags, userId });
};

export const readMeet = (meetNum) => {
  return client.get(`/meet/detail/${meetNum}`);
};

export const Meetlist = ({ tag, userId, page }) => {
  return client.get(`/meet/list`, {
    params: { tag, userId, page },
  });
};

export const joinMeet = ({ userId, meetNum }) => {
  return client.post("/meet/join", { userId, meetNum });
};

export const updateMeet = ({ meetNum, title, body, tags }) =>
  client.patch(`/meet/detail/${meetNum}`, { meetNum, title, body, tags });

export const removePost = (meetNum) =>
  client.delete(`/meet/${meetNum}`, meetNum);
