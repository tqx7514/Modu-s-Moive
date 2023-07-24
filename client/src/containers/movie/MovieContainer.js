import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import MovieList from "../../components/movie/MovieList";
import { listMovie } from "../../modules/currentmovie";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const { movielist, currentmovielist } = useSelector((state) => ({
    currentmovielist: state.movielist.currentmovielist,
    movielist: state.movielist.movielist,
    upcominglist: state.movielist.upcominglist,
  }));
  console.log("currentmovielist");
  const [currentList, setCurrentList] = useState([]);
 
  const handleCurrentMovies = () => {
    setCurrentList(currentmovielist.currentmovielist);

  };

  const handleUpcomingMovies = () => {
    setCurrentList(currentmovielist.upcominglist);

  };

  const handleSortByPopularity = () => {
    const sortedList = [...currentList].sort((a, b) => b.popularity - a.popularity);
    setCurrentList(sortedList);
  };

  const handleSortByStar = () => {
    const sortedList = [...currentList].sort((a, b) => b.star - a.star);
    setCurrentList(sortedList);
  };

  const handleSortByCount = () => {
    const sortedList = [...currentList].sort((a, b) => b.popularity - a.tiketing);
    setCurrentList(sortedList);
  };

  const handleSortBypopularity = () => {
    const sortedList = [...currentList].sort((a, b) => b.vote_count - a.vote_count);
    setCurrentList(sortedList);
  };

  const handleSortBystar = () => {
    const sortedList = [...currentList].sort((a, b) => b.vote_average - a.vote_average);
    setCurrentList(sortedList);
  };

  const handleSortBycount = () => {
    const sortedList = [...currentList].sort((a, b) => b.popularity - a.popularity);
    setCurrentList(sortedList);
  };

  useEffect(() => {
    dispatch(listMovie());
  }, [dispatch]);

  useEffect(() => {
    setCurrentList(currentmovielist.currentmovielist);
  }, [currentmovielist.currentmovielist]);

  return (
    <MovieList
      currentmovielist={currentList}
      handleCurrentMovies={handleCurrentMovies}
      handleUpcomingMovies={handleUpcomingMovies}
      handleSortByPopularity={handleSortByPopularity}
      handleSortByStar={handleSortByStar}
      handleSortByCount={handleSortByCount}
      SortPopularity={handleSortBypopularity}
      SortStar={handleSortBystar}
      SortCount={handleSortBycount}
    />
  );
};

export default MovieContainer;
