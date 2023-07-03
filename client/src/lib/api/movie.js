import client from "./client";

export const movielist = () =>
    client.get("/currentmovie");

export const moviedetail = id =>
    client.get(`/moviedetail/${id}`);    