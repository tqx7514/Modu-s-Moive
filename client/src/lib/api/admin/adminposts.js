import client from "../client";

export const adminpostlist = ({ page, name, tags }) => {
  return client.get(`/admin/postlist`, {
    params: { page, name, tags },
  });
};
