import client from "../client";

export const userlist = ({ page, category}) => {
    return client.get(`/admin/user/${page}`, {params: {category}});
};

export const userdelete = ({id}) => {
    console.log('id',id);
    return client.delete("/admin/user/delete", {params: {id}})
}

export const usergrade = (grade) => {
    console.log('그레이이이이',grade);
    return client.post("admin/user/grade", grade);
}