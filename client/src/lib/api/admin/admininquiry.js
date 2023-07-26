import client from "../client";

export const adminInquiryList = (page) => {
  console.log("관리자 문의 API", page);
  return client.get(`/admin/inquiry/list/${page}`);
};
