import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "../node_modules/react-router-dom/dist/index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import CurrentMoviePage from "./pages/CurrentMoivePage";
import TicketPage from "./pages/TicketPage";
import CinemaPage from "./pages/CinemaPage";
import EventPage from "./pages/EventPage";
import BoardListPage from "./pages/BoardListPage";
import MoviesPage from "./pages/MoviesPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/currentmovie" element={<CurrentMoviePage />} />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/cinema" element={<CinemaPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/boardlist" element={<BoardListPage />} />
      <Route path="/movies" element={<MoviesPage />} />
    </Routes>
  );
};

export default App;
