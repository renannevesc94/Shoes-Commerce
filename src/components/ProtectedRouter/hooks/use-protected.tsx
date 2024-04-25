import Cookies from "js-cookie";

export const useProtected = () => {
  const token = Cookies.get("token");
  const isAuthenticated = !!token;

  return { isAuthenticated };
};
