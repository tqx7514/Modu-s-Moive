import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import AdminMovie from "../../../components/admin/movie/AdminMovie";
import {
  listPosts,
  listMovie,
  updateList,
  deleteList,
} from "../../../modules/currentmovie";
import Swal from "sweetalert2";

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

  const onEdit = (
    title,
    vote_count,
    vote_average,
    popularity,
    id,
    poster_path
  ) => {
    Swal.fire({
      title: "영화관리",
      text: `나이를 선택하십시오.`,
      input: "select",
      inputOptions: {
        all: "all",
        12: "12",
        15: "15",
        19: "19",
      },
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "등록",
      showLoaderOnConfirm: true,
      preConfirm: (selectedValue) => {
        console.log(
          "updatelist===>",
          title,
          vote_count,
          vote_average,
          popularity,
          id,
          poster_path,
          selectedValue
        );
        dispatch(
          updateList({
            title,
            vote_count,
            vote_average,
            popularity,
            id,
            poster_path,
            selectedValue,
          })
        );
        setTimeout(() => {
          dispatch(listMovie());
        }, 200);
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "영화가 등록되었습니다.",
        });
      }
    });
  };

  const onRemove = (movie_num) => {
    Swal.fire({
      title: "영화관리",
      text: `영화를 삭제하시겠습니까`,
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "확인",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        dispatch(deleteList(movie_num));
        setTimeout(() => {
          dispatch(listPosts());
          dispatch(listMovie());
        }, 200);
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "영화가 삭제되었습니다.",
        });
      }
    });
    console.log(movie_num);
    
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
