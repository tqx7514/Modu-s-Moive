import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import CinemaPage from "./pages/CinemaPage";
import EventPage from "./pages/EventPage";
import PostListPage from "./pages/PostListPage";
import MeetListPage from "./pages/MeetListPage";
import MainPage from "./pages/MainPage";
import TicketMoviePage from "./pages/TicketMoviePage";
import TicketSeatPage from "./pages/TicketSeatPage";
import TicketPayPage from "./pages/TicketPayPage";
import PayCompletePage from "./pages/PayCompletePage";
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
import AdminCurrentMoviePage from "./pages/admin/AdminCurrentMoviePage";
import AdminPostListPage from "./pages/admin/AdminPostListPage";
import AdminPostPage from "./pages/admin/AdminPostPage";
import AdminEventPage from "./pages/admin/AdminEventPage";
import AdminEventWritePage from "./pages/admin/AdminEventWritePage";
import AdminMeetPage from "./pages/admin/AdminMeetPage";
import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminEventViewPage from "./pages/admin/AdminEventViewPage";
import AdminInquiryPage from "./pages/admin/AdminInquiryPage";
import AdminMovieTimePage from "./pages/admin/AdminMovieTimePage";
import AdminCinemaPage from "./pages/admin/AdminCinemaPage";

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
      <Route path="/ticket/personSeat" element={<TicketSeatPage />} />
      <Route path="/ticket/pay" element={<TicketPayPage />} />
      <Route path="/ticket/payComplete" element={<PayCompletePage />} />
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
      <Route path="/event/promote" element={<EventPromotePage />} />
      <Route path="/event/other" element={<EventOtherPage />} />
      <Route path="/event/movie/:eventNum" element={<EventViewerPage />} />
      <Route path="/event/promote/:eventNum" element={<EventViewerPage />} />
      <Route path="/event/other/:eventNum" element={<EventViewerPage />} />
      {/* 관리자페이지 */}
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/user" element={<AdminUserPage />} />
      <Route path="/admin/currentmovie" element={<AdminCurrentMoviePage />} />
      <Route path="/admin/event" element={<AdminEventPage />} />
      <Route path="/admin/event/write" element={<AdminEventWritePage />} />
      <Route
        path="/admin/event/detail/:eventNum"
        element={<AdminEventViewPage />}
      />
      <Route path="/admin/postlist" element={<AdminPostListPage />} />
      <Route path="/adminpost/detail/:postNum" element={<AdminPostPage />} />
      <Route path="/admin/event" element={<AdminEventPage />} />
      <Route path="/admin/inquiry" element={<AdminInquiryPage />} />
      <Route path="/admin/meet" element={<AdminMeetPage />} />
      <Route path="/admin/movietime" element={<AdminMovieTimePage />} />
      <Route path="/admin/cinema" element={<AdminCinemaPage />} />
    </Routes>
  );
};

export default App;
