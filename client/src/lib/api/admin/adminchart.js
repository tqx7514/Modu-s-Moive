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

export const mainIncome = () => {
  console.log("매출 API 왓습니다");
  return client.get("/admin/chart/main/income");
};

export const mainMonth = () => {
  console.log("Month API 왓습니다");
  return client.get("/admin/chart/main/month");
};

export const mainMovie = () => {
  console.log("MOVIE 차트API 왔습니다");
  return client.get("/admin/chart/main/movie");
};
