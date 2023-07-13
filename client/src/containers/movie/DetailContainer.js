import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Moviedetail from "../../components/movie/Moviedetail";
import { removeComment } from "../../lib/api/movie";
import {
  initialize,
  readDetail,
  imageDetail,
  videoDetail,
  creditDetail,
  commentWrite,
  changeField,
  readComment,
} from "../../modules/moviedetail";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

const DetailContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    userId,
    moviedetail,
    images,
    videos,
    credits,
    credit,
    genres,
    content,
    movie_id,
    star,
    comment,
    mc_num,
    commentError,
    commentlist,
  } = useSelector((state) => ({
    userId: state.user.user && state.user.user.id,
    moviedetail: state.moviedetail.moviedetail,
    genres: state.moviedetail.moviedetail.genres,
    images: state.moviedetail.images,
    videos: state.moviedetail.videos,
    credit: state.moviedetail.credit,
    credits: state.moviedetail.credits,
    content: state.moviedetail.content,
    mc_num: state.moviedetail.mc_num,
    movie_id: state.moviedetail.moviedetail.id,
    star: state.moviedetail.star,
    comment: state.moviedetail.comment,
    commentError: state.moviedetail.commentError,
    commentlist: state.moviedetail.commentlist,
  }));
  // const id = moviedetail &&moviedetail.id;
  console.log("commentlist================>", commentlist);
  // console.log("id=============>", id);
  // console.log("movieId=======================>", movieId)

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

  const onPublish = useCallback(() => {
    dispatch(commentWrite({ content, userId, movie_id, star }));
    dispatch(readComment(id)); // 댓글 목록을 다시 불러옴
    dispatch(changeField({ key: "content", value: "" }));
    dispatch(changeField({ key: "star", value: "" }));
  }, [content, dispatch, movie_id, star, userId]);

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(readDetail(id));
    dispatch(imageDetail(id));
    dispatch(videoDetail(id));
    dispatch(creditDetail(id));
    dispatch(readComment(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (comment) {
    }
    if (commentError) {
      console.log(commentError);
    }
  }, [navigate, comment, commentError]);

  const onChangecontent = useCallback((e) => {
    onChangeField({ key: "content", value: e.target.value });
  }, []);
  const onChangestar = useCallback((e) => {
    onChangeField({ key: "star", value: e.target.value });
  }, []);

  const onRemove = async () => {
    try {
      await removeComment({ id, mc_num });
    } catch (e) {
      console.log(e);
    }
  };

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
      onRemove={onRemove}
    />
  );
};
export default DetailContainer;
