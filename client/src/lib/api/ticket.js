import client from "./client";

export const regions = async () => await client.get("/ticket/region");

export const selectedRegion = async (grade) => {
  return await client.get(`/ticket/cinema?grade=${grade}`);
};

export const movies = async () => await client.get("/ticket/movies");

export const times = async () => await client.get("/ticket/times");

export const pay = async ({
  data, 
  number, 
  person, 
  seat, 
  totalPrice, 
  discount, 
  user
}) => await client.post("/ticket/pay", {
  data, 
  number, 
  person, 
  seat,
  totalPrice, 
  discount, 
  user
});

export const seat = async () => await client.get("/ticket/seat");