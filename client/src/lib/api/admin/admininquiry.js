import client from "../client";

export const adminInquiryList = ({ page, category }) => {
  console.log("관리자 문의 API", page, category);
  return client.get(`/admin/inquiry/list/${page}`, { params: { category } });
};
