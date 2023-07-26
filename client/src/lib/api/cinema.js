import client from "./client";

export const region = () => {
    return client.get("/cinema/region");
};

export const cinema = () => {
    return client.get("/cinema");
};

export const mycinema = ({ selectedCinema, selectedAddrDetail, user}) => {
    console.log('mycinema API',selectedCinema, selectedAddrDetail, user);
    return client.post("/cinema/mycinema", {
        selectedCinema, selectedAddrDetail, user
    });
}

export const viewmycinema = () => {
    console.log("viewcinema1231431")
    return client.get("/cinema/viewcinema");
};