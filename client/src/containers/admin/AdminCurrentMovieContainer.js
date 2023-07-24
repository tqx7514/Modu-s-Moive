import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import AdminMovie from "../../components/admin/movie/AdminMovie";
import { listPosts, updateList, deleteList } from "../../modules/currentmovie";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const { movielist } = useSelector((state) => ({
    movielist: state.movielist.movielist,
    upcominglist: state.movielist.upcominglist,
    currentmovielist: state.movielist.currentmovielist,
  }));
  console.log("mvoie", movielist);
  const [currentList, setCurrentList] = useState(movielist);
  const [currentType, setCurrentType] = useState("current");
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

  const handleSortByPopularity = () => {
    const sortedList = [...currentList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setCurrentList(sortedList);
  };

  const handleSortByStar = () => {
    const sortedList = [...currentList].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setCurrentList(sortedList);
  };
  const handleSortByCount = () => {
    const sortedList = [...currentList].sort(
      (a, b) => b.vote_count - a.vote_count
    );
    setCurrentList(sortedList);
  };

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentList(movielist.movielist);
  }, [movielist.movielist]);

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
      handleSortByPopularity={handleSortByPopularity}
      handleSortByStar={handleSortByStar}
      handleSortByCount={handleSortByCount}
      onEdit={onEdit}
      currentType={currentType}
      onRemove={onRemove}
    />
  );
};

export default MovieContainer;
