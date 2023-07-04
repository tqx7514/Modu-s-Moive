import client from "./client";

export const writePost = ({ title, body, tags, userId }) => {
  console.log("sssssssssssssssssssss", title, body, tags, userId);
  return client.post("/post/write", { title, body, tags, userId });
};

export const readPost = (postNum) => {
  return client.get(`/post/detail/${postNum}`);
};

export const listPosts = ({ page, name, tags }) => {
  return client.post("/post/postlist", {
    params: { page, name, tags },
  });
};
