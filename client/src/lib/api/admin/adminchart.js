import client from "../client";

export const userGender = () => {
  return client.get("/admin/chart/user/gender");
};

export const userAge = () => {
  return client.get("/admin/chart/user/age");
};

export const inquiryCategory = () => {
  return client.get("/admin/chart/inquiry/category");
};

export const meetRegion = () => {
  return client.get("/admin/chart/meet/region");
};

export const postsDate = () => {
  return client.get("/admin/chart/posts/date");
};
