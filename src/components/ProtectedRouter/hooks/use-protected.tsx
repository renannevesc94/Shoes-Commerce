import Cookies from "js-cookie";

export const useProtected = () => {
  const token = Cookies.get("token");
  const isAuthenticate = !!token;

  return { isAuthenticate };
};
