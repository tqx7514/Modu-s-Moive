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
