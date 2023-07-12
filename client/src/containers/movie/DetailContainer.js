import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Moviedetail from "../../components/movie/Moviedetail";
import {
  readDetail,
  imageDetail,
  videoDetail,
  creditDetail,
  commentWrite,
  changeField
} from "../../modules/moviedetail";

const DetailContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { moviedetail, images, videos, credits, credit, genres, content, comment } = useSelector(
    (state) => ({
      moviedetail: state.moviedetail.moviedetail,
      genres: state.moviedetail.moviedetail.genres,
      images: state.moviedetail.images,
      videos: state.moviedetail.videos,
      credit: state.moviedetail.credit,
      credits: state.moviedetail.credits,
      content: state.moviedetail.content,
      comment: state.moviedetail.comment,
    })
  );
  console.log("moviedetail================>", content);

  const onChangeField = useCallback(payload => dispatch(changeField(payload))
  , [dispatch,]);

  const [showInfo, setShowInfo] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const [textarea, setTextarea] = useState('');

  const handleShowInfo = () => {
    setShowInfo(true);
    setShowReviews(false);
  };

  const handleShowReviews = () => {
    setShowInfo(false);
    setShowReviews(true);
  };

  const onPublish = useCallback(() => {
    dispatch(commentWrite({content}),
    );
  });

  useEffect(() => {
    dispatch(readDetail(id));
    dispatch(imageDetail(id));
    dispatch(videoDetail(id));
    dispatch(creditDetail(id));
  }, [dispatch, id]);

  // const onChange = useCallback( (e) =>{
  //   e.preventDefault();
  //   setTextarea(e.target.value)
  // },[]);

  const onChange = useCallback( (e) =>{
    onChangeField({key: 'content', value: e.target.value});
  },[]);

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
      onChange={onChange}
    />
  );
};
export default DetailContainer;
