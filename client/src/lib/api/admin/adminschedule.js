import client from "../client";

export const schedule = async (schedule) => await client.post("/admin/schedule/post", schedule);

export const deleteSchedule = async (num) => {
    console.log('nummmmmmm222222222', num)
    await client.post("/admin/schedule/delete", num);
}