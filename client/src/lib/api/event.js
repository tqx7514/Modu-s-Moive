import client from "./client";

export const eventlist = () => {
  return client.get("/event");
};

export const eventmovielist = (eventNum) => {
  return client.get(`/event/movie/${eventNum}`);
};

export const eventpromotelist = (eventNum) => {
  return client.get(`/event/promote/${eventNum}`);
};

export const eventotherlist = (eventNum) => {
  return client.get(`/event/other/${eventNum}`);
};

export const eventview = (eventNum) => {
  return client.get(`/event/${eventNum}/view`);
};

export const admineventview = (eventNum) => {
  return client.get(`/admin/event/${eventNum}/view`);
};

// export const editEvent = async (eventNum) => {

// }

// export const eventalllist = (eventNum) => {
//   return client.get("/admin/event");
// };