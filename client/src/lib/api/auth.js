import client from "./client";

export const login = ({ id, password }) => {
  return client.post("/auth/login", { id, password });
};

export const register = ({ id, name, password, email, tel, age, gender }) =>
  client.post("/auth/register", {
    id,
    name,
    password,
    email,
    tel,
    age,
    gender,
  });
export const logout = () => client.post("/auth/logout");

export const check = () => client.get("/auth/check");

export const checkDuplicate = ({ id }) =>
  client.post("/auth/checkDuplicate", { id });
