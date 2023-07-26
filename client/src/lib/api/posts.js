import client from "./client";

export const writePost = ({ title, body, tags, userId }) => {
  console.log("sssssssssssssssssssss", title, body, tags, userId);
  return client.post("/post/write", { title, body, tags, userId });
};

export const readPost = (postNum) => {
  return client.get(`/post/detail/${postNum}`);
};

export const listPosts = ({ page, name, tags }) => {
  console.log(
    "client>src>lib>api>posts>listPosts의 page, name, tags",
    page,
    name,
    tags
  );
  return client.get("/post/postlist", {
    params: { page, name, tags },
  });
};

export const updatePost = ({ postNum, title, body, tags }) =>
  client.patch(`/post/detail/${postNum}`, { postNum, title, body, tags });

export const removePost = (postNum) =>
  client.delete(`/post/${postNum}`, postNum);

// comment부분들

export const readPostComment = (postNum) => {
  console.log("client>src>lib>api>posts>readPostComment", postNum);
  return client.get(`/post/readPostComment/${postNum}`);
};

export const writePostComment = ({ userId, content, postNum }) => {
  console.log(
    "client>src>lib>api>posts>writePostComment",
    userId,
    content,
    postNum
  );
  return client.post("/post/writePostComment", { userId, content, postNum });
};

export const removePostComment = ({ commentNum, postNum }) => {
  // console.log(
  //   "client>src>lib>api>posts>removePostComment",
  //   commentNum,
  //   postNum
  // );
  console.log("aaaaaaaaaaaaaaaaaaaaaaa");
  return client.delete(`/post/removePostComment/${postNum}`, {
    params: { commentNum, postNum },
  });
};
