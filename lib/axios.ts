import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.1.7:8000/api",
});
