import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface AuthContextType {
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

const useAuthBase = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    console.log("NÃO ERA PRA ESTAR AQUI");
    setIsAuthenticated(true);
  }, [isAuthenticated]);

  const login = (token: string) => {
    Cookies.set("token", token);
    setIsAuthenticated(true);
    navigate("/home");
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    navigate("/auth");
  };

  return {
    login,
    logout,
    isAuthenticated,
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
