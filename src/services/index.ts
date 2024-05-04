import { api } from "../clients/api";
import { AuthType } from "../modules/auth/types";
import { NewsletterType } from "../modules/home/types";

type novelties = {
  title: string;
  price: string;
  rating: number;
  urlImage: string;
};

export type highlights = {
  title: string;
  message: string;
  backgroundColor: string;
};

export const apiAuth = (data: AuthType) => {
  return api.post<{ token: string }>("/auth", data);
};

export const getReleases = () => {
  return api.get<novelties[]>("/releases");
};

export const getNovelties = () => {
  return api.get<novelties[]>("/novelties");
};

export const getHighLights = () => {
  return api.get<highlights[]>("/highlights");
};

export const postNewsletter = (data: NewsletterType) => {
  return api.post("/newsletter", data);
};
