import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "../node_modules/react-router-dom/dist/index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import TicketPage from "./pages/TicketPage";
import CinemaPage from "./pages/CinemaPage";
import EventPage from "./pages/EventPage";
import PostListPage from "./pages/PostListPage";
import GatheringPage from "./pages/GatheringPage";
import MainPage from "./pages/MainPage";
import PersonSeat from "./pages/PersonSeat";
import MoviedetailPage from "./pages/MoviedetailPage";
import CurrentMoviePage from "./pages/CurrentMoviePage";
import PostPage from "./pages/PostPage";
import MyPage from "./pages/MyPage";
import AdminPage from "./pages/admin/AdminPage";


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mypage/:id" element={<MyPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/currentmovie" element={<CurrentMoviePage />} />
      <Route path="/ticket" element={<TicketPage />}>
        <Route path="/ticket/PersonSeat" element={<PersonSeat />} />
      </Route>
      <Route path="/detail/:id" element={<MoviedetailPage />} />
      <Route path="/cinema" element={<CinemaPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/@:username">
        <Route index element={<PostListPage/>} />
        <Route path=":postId" element={<PostPage/>} />
      </Route>
      <Route path="/gathering" element={<GatheringPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
