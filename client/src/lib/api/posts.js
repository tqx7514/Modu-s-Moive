import client from "./client";

export const writePost = ({ title, body, tags, userId }) => {
  console.log("sssssssssssssssssssss", title, body, tags, userId);
  return client.post("/post/write", { title, body, tags, userId });
};

export const readPost = (postNum) => {
  return client.get(`/post/detail/${postNum}`);
};

export const listPosts = ({ page, name, tags, searchResult }) => {
  console.log("sssssssss", searchResult);
  return client.get("/post/postlist", {
    params: { page, name, tags, searchResult },
  });
};

export const updatePost = ({ postNum, title, body, tags }) =>
  client.patch(`/post/detail/${postNum}`, { postNum, title, body, tags });

export const removePost = (postNum) =>
  client.delete(`/post/${postNum}`, postNum);

// comment부분들
export const writePostComment = ({ userId, content, postNum }) => {
  console.log(
    "client>src>lib>api>posts>writePostComment",
    userId,
    content,
    postNum
  );
  return client.post("/post/writePostComment", { userId, content, postNum });
};
