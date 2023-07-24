import client from "../client";

export const adminpostlist = ({ page, name, tags }) => {
  return client.get(`/admin/post/postlist`, {
    params: { page, name, tags },
  });
};

export const AdminReadPost = (postNum) => {
  console.log("AdminRead API", postNum);
  return client.get(`/admin/post/detail/${postNum}`);
};

export const AdminRemovePost = (postNum) =>
  client.delete(`/admin/post/${postNum}`, postNum);
