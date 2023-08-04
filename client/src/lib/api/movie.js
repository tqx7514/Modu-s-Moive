import client from "./client";

export const currentlist = () => {
  console.log("currentlist=====>");
  return client.get("/currentmovie/movielist");
}

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

export const createlike = ({mc_num, userid}) => {
  console.log('createlike===>', mc_num, userid);
  return client.post(`/currentmovie/detail/like`, {
    mc_num, userid
  });
};

export const updateMovielist = ({title, vote_count, vote_average, popularity, id, poster_path, selectedValue}) => {
  console.log("updateMovielist==============++>", title, vote_count, vote_average, popularity, id, poster_path, selectedValue)
  return client.post('currentmovie/AdminMovielist', {
    title, vote_count, vote_average, popularity, id, poster_path, selectedValue
  })
};

export const adminRemove = ({movie_num}) => {
  return client.delete('/currentmovie/admin/remove', {params: {movie_num}});
}

export const DelLike = ({mc_num, userid}) => {
  console.log("DelLike==========>", mc_num, userid)
  return client.delete('currentmovie/detail/like/delete', {params: {mc_num, userid}});
}

export const Like = () => {
  return client.get('currentmovie/like');
}