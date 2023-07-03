import client from "./client";

export const writePost = ({ title, body, tags,userId }) =>
    {console.log('sssssssssssssssssssss',title,body,tags,userId);
        return client.post('/post/write', { title, body, tags,userId })};

export const readPost = id => client.get(`/post/${id}`);

export const listPosts = ({ page, name, tags }) => {
    console.log("12456", page, name, tags);
    return client.post('/post/postlist', {
        params: { page, name, tags },
    });
};