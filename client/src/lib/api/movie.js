import client from "./client";

export const movielist = () => {
  return client.get("/currentmovie");
};

export const moviedetail = (id, movieId) => {
  console.log("sssssssssssssss->", id, );
  return client.get(`/currentmovie/detail/${id}`);
};

export const commentwrite = ({ content, userId, movie_id, star }) => {
  console.log("commentwrite-->", content, userId, movie_id, star);
  return client.post(`/currentmovie/moviecomment`, { content, userId, movie_id, star });
};

export const removeComment = ({id, mc_num}) => {
  return client.delete(`/currentmovie/detail/${id}`,
  {params: mc_num});
}