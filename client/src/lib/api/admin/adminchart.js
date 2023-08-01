import client from "../client";

export const userGender = () => {
  return client.get("/admin/chart/user/gender");
};
