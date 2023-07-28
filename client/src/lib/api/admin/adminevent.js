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
  console.log("readAdminEvent 통과 ========> ", eventNum);
  return client.get(`/admin/event/detail/${eventNum}`);
};

export const adminEventBoardList = ({ page }) => {
  return client.get(`/admin/event/list`, {
    params: { page },
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
  client.patch(`/admin/event/${eventNum}`, {
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
