import client from "./client";

export const region = () => {
    return client.get("/cinema/region");
};

export const cinema = () => {
    return client.get("/cinema");
}