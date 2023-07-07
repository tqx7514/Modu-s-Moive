import client from "./client";

export const region = () => {
    return client.get("/cinema");
};

export const cinema = () => {
    return client.get("/cinema");
}