import axios from "axios";

export const api = axios.create({
  baseURL: "http://fakeapi.com",
  timeout: 1000,
});
