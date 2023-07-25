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

//MyPage
export const withdraw = ({ id }) => {
  console.log("탈퇴 ===============id", id);
  return client.post(`/auth/withdraw/${id}`, { id });
};

export const checkPW = ({ id, password }) => {
  console.log("비번확인", id, password);
  return client.post(`/auth/check/${id}`, { id, password });
};

export const updateInfo = ({ id, pw, email, tel, age, gender }) => {
  console.log("updateInfo 프론트API", id, pw, email, tel, age, gender);
  console.log("pw", pw === "");
  return client.post(`/auth/update/${id}`, { id, pw, email, tel, age, gender });
};
