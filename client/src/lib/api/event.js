import client from "./client";

export const readEvent = () => {
  return client.get(`/event`);
};

export const readMovieEvent = (eventNum) => {
  return client.get(`/event/movie/${eventNum}`);
};

export const readPromoteEvent = (eventNum) => {
  return client.get(`/event/promote/${eventNum}`);
};

export const readOtherEvent = (eventNum) => {
  return client.get(`/event/promote/${eventNum}`);
};
