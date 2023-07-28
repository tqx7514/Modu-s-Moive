import client from "../client";

export const userlist = ({ page, category}) => {
    return client.get(`/admin/user/${page}`, {params: {category}});
};

export const userdelete = ({id}) => {
    return client.delete("/admin/user/delete", {params: {id}})
}