import client from "../client";

export const userGender = () => {
  return client.get("/admin/chart/user/gender");
};

export const inquiryCategory = () => {
  return client.get("/admin/chart/inquiry/category");
};

export const meetRegion = () => {
  return client.get("/admin/chart/meet/region");
};
