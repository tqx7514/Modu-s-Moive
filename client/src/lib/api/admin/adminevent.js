// import client from "../client";

// export const writeAdminEvent = ({
//   categoryId,
//   userId,
//   eventTitle,
//   eventContent,
//   eventImg,
//   startEventDate,
//   endEventDate,
// }) => {
//   console.log("관리자용 이벤트 글쓰기 프론트api입니다");
//   return client.post("/admin/event/write", {
//     categoryId,
//     userId,
//     eventTitle,
//     eventContent,
//     eventImg,
//     startEventDate,
//     endEventDate,
//   });
// };

// export const readAdminEvent = (eventNum) => {
//   console.log("readAdminEvent입니다!", eventNum);
//   return client.get(`/admin/event/${eventNum}`);
// };

// export const adminEventBoardList = ({ page, name, searchEventResult }) => {
//   return client.get(`/admin/event/list`, {
//     params: { page, name, searchEventResult },
//   });
// };

// export const updateAdminEvent = async ({
//   eventNum,
//   categoryId,
//   eventTitle,
//   eventContent,
//   eventImg,
//   startEventDate,
//   endEventDate,
// }) => {
//   try {
//     const response = await client.patch(`/admin/event/${eventNum}`, {
//       eventNum,
//       categoryId,
//       eventTitle,
//       eventContent,
//       eventImg,
//       startEventDate,
//       endEventDate,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("updateAdminEvent error:", error);
//     throw error;
//   }
// };

// export const removeAdminEvent = async (eventNum) => {
//   try {
//     const response = await client.delete(`/admin/event/${eventNum}`);
//     return response.data;
//   } catch (error) {
//     console.error("removeAdminEvent error:", error);
//     throw error;
//   }
// };
