import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import Moviedetail from "../../components/movie/Moviedetail";
import {
  readDetail,
  initialize,
  commentWrite,
  changeField,
  readComment,
  removeComment,
  updateComment,
  createLike,
  delLike,
  movieDetailLike,
} from "../../modules/moviedetail";

const DetailContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    moviedetail,
    userId,
    content,
    movie_id,
    star,
    comment,
    commentError,
    commentlist,
    loading,
    movieLike,
    like,
  } = useSelector((state) => ({
    moviedetail: state.moviedetail.moviedetail,
    userId: state.user.user && state.user.user.id,
    content: state.moviedetail.content,
    movie_id: state.moviedetail.moviedetail.id,
    star: state.moviedetail.star,
    comment: state.moviedetail.comment,
    commentError: state.moviedetail.commentError,
    commentlist: state.moviedetail.commentlist,
    loading: state.loading["moviedetail/DETAIL_POST"],
    movieLike: state.moviedetail.movieLike,
    like: state.moviedetail.like,
  }));
  console.log("moviedetail===========>", moviedetail);
  const [showInfo, setShowInfo] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const [selectBtn, setSelectBtn] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const handleBtn = (e) => {
    setSelectBtn(e.target.textContent);
  };

  const handleShowInfo = (e) => {
    setShowInfo(true);
    setShowReviews(false);
    handleBtn(e);
    console.log("btn????????????????", selectBtn);
  };

  const handleShowReviews = (e) => {
    setShowInfo(false);
    setShowReviews(true);
    handleBtn(e);
  };

  useEffect(() => {
    dispatch(readDetail(id));
    dispatch(readComment(id));
    // dispatch(movieDetailLike());
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
      await dispatch(removeComment({ commentNum, movie_id }));
    } catch (e) {
      console.log(e);
    }
  };
  const onEdit = (commentNum, editContent, rating) => {
    dispatch(updateComment({ commentNum, movie_id, editContent, rating }));
  };

  const handleClickUpLike = (mc_num, userid) => {
    setIsLiked(true);
    console.log("handleClickUpLike", mc_num, userid);
    dispatch(createLike(mc_num, userid));
    dispatch(readComment(id));
    setTimeout(() => {
      dispatch(movieDetailLike());
    }, 100);
  };

  const handleClickDownLike = (mc_num, userid) => {
    setIsLiked(false);
    console.log("handleClickDownLike", mc_num, userid);
    dispatch(delLike(mc_num, userid));
    dispatch(readComment(id));
    setTimeout(() => {
      dispatch(movieDetailLike());
    }, 100);
  };

  const ownPost = (id) => {
    return userId && userId === id;
  };

  return (
    <Moviedetail
      moviedetail={moviedetail}
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
      onEdit={onEdit}
      ownPost={ownPost}
      loading={loading}
      selectBtn={selectBtn}
      userId={userId}
      isLiked={isLiked}
      handleClickUpLike={handleClickUpLike}
      handleClickDownLike={handleClickDownLike}
      like={like}
    />
  );
};
export default DetailContainer;
