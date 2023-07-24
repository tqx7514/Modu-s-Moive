import axios from "axios";

const ipAddress = window.location.hostname;

const client = axios.create({
  baseURL: `http://${ipAddress}:3005`,
  withCredentials: true,
});

export default client;
