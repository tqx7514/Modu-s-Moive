import client from "./client";

export const regions = async () => await client.get('/ticket/region');
// export const selectedRegion = async (grade) =>{
//     console.log("SELECTrE--->", grade);

//     return  await client.get(`/ticket/cinema?${grade}`);
// }
export const selectedRegion = async (grade) =>{

    return  await client.get(`/ticket/cinema?grade=${grade}`);
}