import client from "../client";

export const AdminCinema = ({page, category}) => {
    return client.get(`/admin/cinema/${page}`, {params: {category}});
}