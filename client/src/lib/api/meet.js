import client from "./client";

export const writeMeet = ({ title, body, tags, userId, region }) => {
  console.log("글쓰기 프론트api입니다");
  return client.post("/meet/write", { title, body, tags, userId, region });
};

export const readMeet = (meetNum) => {
  return client.get(`/meet/detail/${meetNum}`);
};

export const Meetlist = ({ tag, region, page }) => {
  return client.get(`/meet/list`, {
    params: { tag, region, page },
  });
};

export const joinMeet = ({ userId, meetNum }) => {
  return client.post("/meet/join", { userId, meetNum });
};

export const withdrawMeet = ({ userId, meetNum }) => {
  return client.post(`/meet/withdraw`, { userId, meetNum });
};

export const updateMeet = ({ meetNum, title, body, tags, region }) =>
  client.patch(`/meet/detail/${meetNum}`, {
    meetNum,
    title,
    body,
    tags,
    region,
  });

export const removeMeet = (meetNum) =>
  client.delete(`/meet/${meetNum}`, meetNum);
