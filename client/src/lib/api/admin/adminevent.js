import client from "../client";

export const writeAdminEvent = ({
  categoryId,
  userId,
  eventTitle,
  eventContent,
  eventImg,
  startEventDate,
  endEventDate,
}) => {
  console.log("관리자용 이벤트 글쓰기 프론트api입니다");
  return client.post("/admin/event/write", {
    categoryId,
    userId,
    eventTitle,
    eventContent,
    eventImg,
    startEventDate,
    endEventDate,
  });
};

export const readAdminEvent = (eventNum) => {
    console.log("readAdminEvent 통과 ========> ", eventNum)
  return client.get(`/admin/event/detail/${eventNum}`);
};

export const adminEventBoardList = ({ page, name, searchEventResult }) => {
  console.log("adminEventBoardList 통과 ==========>", page, name, searchEventResult)
  return client.get(`/admin/event/list`, {
    params: { page, name, searchEventResult },
  });
};

export const updateAdminEvent = async ({
  eventNum,
  categoryId,
  eventTitle,
  eventContent,
  eventImg,
  startEventDate,
  endEventDate,
}) =>
  client.patch(`/admin/event/detail/${eventNum}`, {
    eventNum,
    categoryId,
    eventTitle,
    eventContent,
    eventImg,
    startEventDate,
    endEventDate,
  });

export const removeAdminEvent = async (eventNum) => {
  return client.delete(`/admin/event/${eventNum}`, eventNum);
};
