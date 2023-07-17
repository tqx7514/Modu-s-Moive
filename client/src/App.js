import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import TicketMoviePage from "./pages/TicketMoviePage";
import CinemaPage from "./pages/CinemaPage";
import EventPage from "./pages/EventPage";
import PostListPage from "./pages/PostListPage";
import MeetListPage from "./pages/MeetListPage";
import MainPage from "./pages/MainPage";
import PersonSeat from "./pages/PersonSeat";
import MoviedetailPage from "./pages/MoviedetailPage";
import CurrentMoviePage from "./pages/CurrentMoviePage";
import PostPage from "./pages/PostPage";
import MyPage from "./pages/MyPage";
import AdminPage from "./pages/admin/AdminPage";
import EventMoviePage from "./pages/EventMoviePage";
import MeetWritePage from "./pages/MeetWritePage";
import MeetPage from "./pages/MeetPage";
import EventPromotePage from "./pages/EventPromotePage";
import EventOtherPage from "./pages/EventOtherPage";
import EventViewerPage from "./pages/EventViewerPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mypage/:id" element={<MyPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/currentmovie" element={<CurrentMoviePage />} />
      {/* 예매 페이지 */}
      <Route path="/ticket" element={<TicketMoviePage />} />
      <Route path="/ticket/PersonSeat" element={<PersonSeat />} />
      {/* -----------*/}
      <Route path="/currentmovie/detail/:id" element={<MoviedetailPage />} />
      <Route path="/cinema" element={<CinemaPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/postlist" element={<PostListPage />} />
      <Route path="post/detail/:postNum" element={<PostPage />} />
      <Route path="/event/movie" element={<EventMoviePage />} />
      <Route path="/meet" element={<MeetListPage />} />
      <Route path="/meet/detail/:meetNum" element={<MeetPage />} />
      <Route path="/meet/write" element={<MeetWritePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/event/promote" element={<EventPromotePage />} />
      <Route path="/event/other" element={<EventOtherPage />} />
      <Route path="/event/movie/:eventNum" element={<EventViewerPage />} />
      <Route path="/event/promote/:eventNum" element={<EventViewerPage />} />
      <Route path="/event/other/:eventNum" element={<EventViewerPage />} />
    </Routes>
  );
};

export default App;
