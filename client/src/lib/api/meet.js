import client from "./client";

export const writeMeet = ({ title, body, tags, userId }) => {
  return client.post("/meet/write", { title, body, tags, userId });
};

export const readMeet = (meetNum) => {
  console.log("ddddddddddddddddddd");
  return client.get(`/meet/${meetNum}`);
};

export const Meetlist = ({ page, username, tag }) => {
  return client.get(`/meet`, {
    params: { page, username, tag },
  });
};
