import React, { useCallback, useEffect, useState,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import Moviedetail from "../../components/movie/Moviedetail";
import {
  readDetail,
  imageDetail,
  videoDetail,
  creditDetail,
  initialize,
  commentWrite,
  changeField,
  readComment,
  removeComment,
  updateComment
} from "../../modules/moviedetail";

const DetailContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    user,
    moviedetail,
    images,
    videos,
    credits,
    credit,
    genres,
    userId,
    content,
    movie_id,
    star,
    comment,
    commentError,
    commentlist,
  } = useSelector((state) => ({
    user: state.user.user,
    moviedetail: state.moviedetail.moviedetail,
    genres: state.moviedetail.moviedetail.genres,
    images: state.moviedetail.images,
    videos: state.moviedetail.videos,
    credit: state.moviedetail.credit,
    credits: state.moviedetail.credits,
    userId: state.user.user && state.user.user.id,
    content: state.moviedetail.content,
    movie_id: state.moviedetail.moviedetail.id,
    star: state.moviedetail.star,
    comment: state.moviedetail.comment,
    commentError: state.moviedetail.commentError,
    commentlist: state.moviedetail.commentlist,
  }));
  console.log("commentlist=======+++>", commentlist);
  const [showInfo, setShowInfo] = useState(true);
  const [showReviews, setShowReviews] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(true);
    setShowReviews(false);
  };

  const handleShowReviews = () => {
    setShowInfo(false);
    setShowReviews(true);
  };

  useEffect(() => {
    dispatch(readDetail(id));
    dispatch(imageDetail(id));
    dispatch(videoDetail(id));
    dispatch(creditDetail(id));
    dispatch(readComment(id));
  }, [dispatch, id]);

  const onPublish = useCallback(() => {
    dispatch(commentWrite({ content, userId, movie_id, star }));
    dispatch(readComment(id)); // 댓글 목록을 다시 불러옴
    dispatch(changeField({ key: "content", value: "" }));
    dispatch(changeField({ key: "star", value: "" }));
  }, [content, dispatch, movie_id, star, userId]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onChangecontent = useCallback((e) => {
    onChangeField({ key: "content", value: e.target.value });
  }, []);
  const onChangestar = useCallback((e) => {
    onChangeField({ key: "star", value: e.target.value });
  }, []);

  useEffect(() => {
    if (comment) {
    }
    if (commentError) {
      console.log(commentError);
    }
  }, [navigate, comment, commentError]);

  const onRemove = async (commentNum) => {
    try {
      await dispatch(removeComment({commentNum,movie_id}));
    } catch (e) {
      console.log(e);
    }
  };  

  const onEdit = (commentNum, editContent, rating) => {
    dispatch(updateComment({commentNum, movie_id, editContent, rating}));
  };
  // const ownPost = (user && user.userId) === (commentlist && commentlist);
const ownPost = (id) =>{
  console.log('iddddddddddddddddddd',id);
  console.log('userssssssssssssss',userId);
  return (userId&&userId) === (id)
}
  return (
    <Moviedetail
      moviedetail={moviedetail}
      images={images}
      videos={videos}
      credits={credits}
      credit={credit}
      genres={genres}
      showInfo={showInfo}
      showReviews={showReviews}
      handleShowInfo={handleShowInfo}
      handleShowReviews={handleShowReviews}
      onPublish={onPublish}
      content={content}
      star={star}
      onChangecontent={onChangecontent}
      onChangestar={onChangestar}
      commentlist={commentlist}
      onRemove = {onRemove}
      onEdit={onEdit}
      ownPost={ownPost}
    />
  );
};
export default DetailContainer;
