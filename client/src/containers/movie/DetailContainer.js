import React, { useCallback, useEffect, useState } from "react";
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
import Swal from "sweetalert2";
import StarRating from "../../components/movie/StarRating";

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

  const [rating, setRating] = useState(parseInt(star));

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  
  const handleStarMouseEnter = (selectedRating) => {
    setRating(selectedRating);
  };
  
  const handleStarMouseLeave = () => {
    // 별점 값 유지
  };
  


  const onEdit = (e) => {
    const content = e.target.dataset.content;
    const commentNum = e.target.dataset.mc_num;
    const star = e.target.dataset.star;
    console.log("conent,commentNum,star", content,commentNum, star);
    Swal.fire({
      title: "댓글 수정",
      input: "text",
      inputValue: `${content}`,
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "수정",
      showLoaderOnConfirm: true,
      preConfirm: (input) => {
        dispatch(
          updateComment({
            commentNum,
            movie_id: movie_id,
            content: input,
          })
        );
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "수정 성공",
        });
      }
    });
  }



  const ownPost = (user && user.userId) === (commentlist && commentlist.id);

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
    />
  );
};
export default DetailContainer;
