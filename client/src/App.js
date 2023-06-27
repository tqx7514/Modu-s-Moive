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
import GatheringPage from "./pages/GatheringPage";
import MainPage from "./pages/MainPage";
import PersonSeat from "./pages/PersonSeat";
import MoviedetailPage from "./pages/MoviedetailPage"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/currentmovie" element={<CurrentMoviePage />} />
      <Route path="/ticket" element={<TicketPage />}>
        <Route path="/ticket/PersonSeat" element={<PersonSeat/>} />
      </Route>
      <Route path="/detail/:id" element={<MoviedetailPage/>}/>
      <Route path="/cinema" element={<CinemaPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/boardlist" element={<BoardListPage />} />
      <Route path="/gathering" element={<GatheringPage />} />
    </Routes>
  );
};

export default App;
