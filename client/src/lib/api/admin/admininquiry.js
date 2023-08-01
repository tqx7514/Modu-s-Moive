import client from "../client";

export const adminInquiryList = ({ page, category, sort, classify }) => {
  console.log("관리자 문의 API", page, category);
  return client.get(`/admin/inquiry/list/${page}`, {
    params: { category, sort, classify },
  });
};

export const updateAnswer = ({ inquiryNum, answer }) => {
  console.log("답변달기API", inquiryNum, answer);
  return client.post(`/admin/inquiry/update/${inquiryNum}`, { answer: answer });
};
