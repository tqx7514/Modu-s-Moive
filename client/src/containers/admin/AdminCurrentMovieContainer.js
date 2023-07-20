// import { useDispatch, useSelector } from "react-redux";
// import React, { useState, useEffect } from "react";
// import AdminMovie from "../../components/admin/movie/AdminMovie";
// import { listPosts, updateList } from "../../modules/currentmovie";

// const MovieContainer = () => {
//   const dispatch = useDispatch();
//   const { movielist } = useSelector((state) => ({
//     movielist: state.movielist.movielist,
//     upcominglist: state.movielist.upcominglist,
//   }));

//   const [currentList, setCurrentList] = useState(movielist);
//   // console.log("1111111111111111->", currentList)
//   const handleCurrentMovies = () => {
//     setCurrentList(movielist.movielist);
//   };

//   const handleUpcomingMovies = () => {
//     setCurrentList(movielist.upcominglist);
//   };

//   const handleSortByPopularity = () => {
//     const sortedList = [...currentList].sort(
//       (a, b) => b.popularity - a.popularity
//     );
//     setCurrentList(sortedList);
//   };

//   const handleSortByStar = () => {
//     const sortedList = [...currentList].sort(
//       (a, b) => b.vote_average - a.vote_average
//     );
//     setCurrentList(sortedList);
//   };
//   const handleSortByCount = () => {
//     const sortedList = [...currentList].sort(
//       (a, b) => b.vote_count - a.vote_count
//     );
//     setCurrentList(sortedList);
//   };

//   useEffect(() => {
//     dispatch(listPosts());
//   }, [dispatch]);

//   useEffect(() => {
//     setCurrentList(movielist.movielist);
//   }, [movielist.movielist]);

//   const onEdit = ({title, vote_count, vote_average, popularity, id, poster_path}) => {
//     console.log("onEdit============>", title, vote_count, vote_average, popularity, id, poster_path);
//     dispatch(updateList({title, vote_count, vote_average, popularity, id, poster_path}));
//   };
  


//   return (
    
//       <AdminMovie
//         movielist={currentList}
//         handleCurrentMovies={handleCurrentMovies}
//         handleUpcomingMovies={handleUpcomingMovies}
//         handleSortByPopularity={handleSortByPopularity}
//         handleSortByStar={handleSortByStar}
//         handleSortByCount={handleSortByCount}
//         onEdit={onEdit}
//       />
    
//   );
// };

// export default MovieContainer;
