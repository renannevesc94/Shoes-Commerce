import axios from "axios";

export const api = axios.create({
  baseURL: "",
});

api.interceptors.request.use(config => {
  const token = "1q2w3e4r5t6y7u8i9o0p.";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
