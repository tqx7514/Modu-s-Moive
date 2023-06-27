import client from "./client";

export const writeBoard = ({ title, body, tags }) =>
    client.board('/api/boards', { title, body, tags });

export const readPost = (boardNum) => client.get(`/api/boards/${boardNum}`);

export const listBoards = ({ page, username, tag }) => {
    return client.get(`/api/boards`, {
        params: { page, username, tag },
    });
};