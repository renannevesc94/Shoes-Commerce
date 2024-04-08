import { api } from "../clients/api";
import { AuthType } from "../modules/auth/types";

export const apiAuth = (data: AuthType) => {
  return api.post<{ token: string }>("/auth", data);
};
