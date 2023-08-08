import client from "../client";

export const AdminCinema = ({page, category}) => {
    console.log("admincinema==============>")
    return client.get(`/admin/cinema/${page}`, {params: {category}});
}