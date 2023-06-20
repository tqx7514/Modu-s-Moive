import client from "./client";

export const login = async ({ id, password }) => {
  console.log(
    "9999999999999999999->",
    await client.post("/auth/login", { id, password })
  );
  return await client.post("/auth/login", { id, password });
};

export const register = ({ id, password, email }) =>
  client.post("/auth/register", { id, password, email });

export const logout = () => client.post("/auth/logout");

export const check = async () => await client.get("/auth/check");
