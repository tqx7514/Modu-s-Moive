import client from "./client";

export const movielist = () => {
  return client.get("/currentmovie");
};

export const moviedetail = (id) => {
  console.log("sssssssssssssss->", id, );
  return client.get(`/currentmovie/detail/${id}`);
};

export const commentwrite = ({ content, userId, movie_id, star }) => {
  console.log("commentwrite-->", content, userId, movie_id, star);
  return client.post(`/currentmovie/moviecomment`, { content, userId, movie_id, star });
};

export const removeComment = ({commentNum,movie_id}) => {
  console.log('ssssssssssss');
  console.log("삭제..ㅎㅎㅎㅎㅎㅎㅎㅎㅎ", commentNum,movie_id);
  return client.delete(`/currentmovie/detail/comment`, {
  params: {commentNum, movie_id}});
};

export const updateComment = ({ commentNum,movie_id, editContent, rating}) => {
  console.log('update====>', commentNum, movie_id, editContent, rating);
  return client.post('/currentmovie/detail/comment/update', {
    commentNum,
    movie_id,
    editContent,
    rating,
  
  });
};