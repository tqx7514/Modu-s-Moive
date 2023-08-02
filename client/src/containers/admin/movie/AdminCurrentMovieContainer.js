import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import AdminMovie from "../../../components/admin/movie/AdminMovie";
import { listPosts, listMovie, updateList, deleteList } from "../../../modules/currentmovie";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const { movielist } = useSelector((state) => ({
    movielist: state.movielist.movielist,
    upcominglist: state.movielist.upcominglist,
    currentmovielist: state.movielist.currentmovielist,
  }));
  console.log("movie", movielist);
  const [currentList, setCurrentList] = useState(movielist);
  const [currentType, setCurrentType] = useState("currentmovielist");
  const handleCurrentMovies = () => {
    setCurrentList(movielist.currentmovielist);
    setCurrentType("currentmovielist");
  };

  const handleUpcomingMovies = () => {
    setCurrentList(movielist.movielist);
    setCurrentType("movielist");
  };

  const handleUpcomingMovie = () => {
    setCurrentList(movielist.upcominglist);
    setCurrentType("upcoming");
  };

  useEffect(() => {
    dispatch(listPosts());
    dispatch(listMovie());
  }, [dispatch]);

  useEffect(() => {
    setCurrentList(movielist.movielist);
    setCurrentList(movielist.currentmovielist);
  }, [movielist.movielist, movielist.currentmovielist]);

  const onEdit = ({
    title,
    vote_count,
    vote_average,
    popularity,
    id,
    poster_path,
  }) => {
    console.log(
      "onEdit============>",
      title,
      vote_count,
      vote_average,
      popularity,
      id,
      poster_path
    );
    dispatch(
      updateList({
        title,
        vote_count,
        vote_average,
        popularity,
        id,
        poster_path,
      })
    );
  };

  const onRemove = (movie_num) => {
    console.log(movie_num);
    dispatch(deleteList(movie_num));
  };

  return (
    <AdminMovie
      movielist={currentList}
      handleCurrentMovies={handleCurrentMovies}
      handleUpcomingMovies={handleUpcomingMovies}
      handleUpcomingMovie={handleUpcomingMovie}
      onEdit={onEdit}
      currentType={currentType}
      onRemove={onRemove}
    />
  );
};

export default MovieContainer;
