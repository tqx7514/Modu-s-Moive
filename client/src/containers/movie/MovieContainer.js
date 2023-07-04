import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import MovieList from "../../components/movie/MovieList";
import { listPosts, upcomingPosts } from "../../modules/currentmovie";

const MovieContainer = () => {
    const dispatch = useDispatch();
    const {movielist} = useSelector((state) => ({
      movielist: state.movielist.movielist,
      upcominglist: state.movielist.upcominglist,
    }));
    
    useEffect(() => {
      dispatch(listPosts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(upcomingPosts());
    }, [dispatch]);

    return <MovieList movielist={movielist}/>
}

export default MovieContainer;



