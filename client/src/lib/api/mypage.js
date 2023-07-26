import client from "./client";

export const myMeet = ({ id, meetNum }) => {
  return client.get(`/mypage/meetlist/${id}`, {
    params: { meetNum },
  });
};

export const myPost = ({ id, pages }) => {
  return client.get(`/mypage/postlist/${id}`, {
    params: { pages },
  });
};

export const myInquiry = ({ id, page }) => {
  console.log("myInquiry API, id========", id, page);
  return client.get(`/mypage/inquirylist/${id}`, {
    params: { page },
  });
};

export const writeInquiry = ({ userId, classify, title, body, answer }) => {
  console.log(
    "writeInquiry API========",
    userId,
    classify,
    title,
    body,
    answer
  );
  return client.post("/mypage/inquiryWrite", {
    userId,
    classify,
    title,
    body,
    answer,
  });
};
