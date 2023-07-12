import client from "./client";

export const movielist = () => {
  return client.get("/currentmovie");
};

export const moviedetail = (id) => {
  console.log("sssssssssssssss->", id);
  return client.get(`/currentmovie/detail/${id}`);
};

export const commentwrite = (id, {content}) => {
  return client.post(`/currentmovie/detail/${id}`, {content});
}