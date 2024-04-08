import { createContext, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface AuthContextType {
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
});

const useAuthBase = () => {
  const navigate = useNavigate();

  const login = (token: string) => {
    Cookies.set("token", token);
    navigate("/home");
  };

  const logout = () => {
    Cookies.remove("token");
    navigate("/auth");
  };

  return {
    login,
    logout,
  };
};

export const AuthProvider = () => {
  const value = useAuthBase();
  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
