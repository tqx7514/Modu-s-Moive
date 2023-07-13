import client from "./client";

export const writeMeet = ({ title, body, tags, userId, region }) => {
  console.log("글쓰기 프론트api입니다");
  return client.post("/meet/write", { title, body, tags, userId, region });
};
export const readMeet = (meetNum) => {
  return client.get(`/meet/detail/${meetNum}`);
};
export const Meetlist = ({ tag, region, page }) => {
  return client.get(`/meet/list`, {
    params: { tag, region, page },
  });
};
export const joinMeet = ({ user, meetNum }) => {
  return client.post("/meet/join", { user, meetNum });
};
export const withdrawMeet = ({ user, meetNum }) => {
  return client.post(`/meet/withdraw`, { user, meetNum });
};
export const updateMeet = ({ meetNum, title, body, tags, region }) =>
  client.patch(`/meet/detail/${meetNum}`, {
    meetNum,
    title,
    body,
    tags,
    region,
  });
export const removeMeet = (meetNum) =>
  client.delete(`/meet/${meetNum}`, meetNum);
// export const updateToken = (user) => {
//   console.log("프론트", user);
//   return client.post("/meet/updateToken", user);
// };

export const writeMeetBoard = ({ body, userId, meetNum }) => {
  console.log("프론트api meetboard글쓰기");
  return client.post("/meet/writeMeetBoard", { body, userId, meetNum });
};

export const MeetBoardList = (meetNum) => {
  console.log("meetNum", meetNum);
  return client.get("/meet/meetBoardList", { params: { meetNum } });
};

export const readComment = (meetboardNum) => {
  console.log("프론트 API readComment도착", meetboardNum);
  return client.get(`/meet/meetBoardList/${meetboardNum}`);
};

export const writeMeetComment = ({ userId, body, meetboard_Num }) => {
  console.log("글쓰기 프론트API 도착", userId, body, meetboard_Num);
  return client.post("/meet/writeMeetComment", { userId, body, meetboard_Num });
};

export const removeMeetBoard = ({ meetboardNum, meetNum }) => {
  console.log("리무브밋보드 프론트", meetboardNum, meetNum);
  return client.delete(`/meet/detail/${meetboardNum}`, {
    params: { meetboardNum, meetNum },
  });
};

export const removeMeetComment = ({ meetcommentNum, meetboardNum }) => {
  console.log("댓글삭제 프론트", meetcommentNum, meetboardNum);
  return client.delete(`/meet/detail/comment/${meetcommentNum}`, {
    params: { meetcommentNum, meetboardNum },
  });
};

export const updateMeetBoard = ({ meetboardNum, MeetNum, body }) => {
  console.log("수정하기 프론트도착", meetboardNum, MeetNum, body);
  return client.post(`/meet/updateMeetBoard/${meetboardNum}`, {
    meetboardNum,
    MeetNum,
    body,
  });
};

export const updateMeetComment = ({ meetcommentNum, MeetBoardNum, body }) => {
  console.log("댓글 수정하기 프론트도착", meetcommentNum, MeetBoardNum, body);
  return client.post(`/meet/updateMeetComment/${meetcommentNum}`, {
    meetcommentNum,
    MeetBoardNum,
    body,
  });
};
