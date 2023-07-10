import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Moviedetail from "../../components/movie/Moviedetail";
import {
  readDetail,
  imageDetail,
  videoDetail,
  creditDetail,
} from "../../modules/moviedetail";

const DetailContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { moviedetail, images, videos, credits, credit, genres } = useSelector(
    (state) => ({
      moviedetail: state.moviedetail.moviedetail,
      genres: state.moviedetail.moviedetail.genres,
      images: state.moviedetail.images,
      videos: state.moviedetail.videos,
      credit: state.moviedetail.credit,
      credits: state.moviedetail.credits,
    })
  );

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
  }, [dispatch, id]);

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
    />
  );
};
export default DetailContainer;
