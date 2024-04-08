import { Navigate, Outlet } from "react-router-dom";
import { useProtected } from "./hooks/use-protected";

export const ProtectedRouter = () => {
  const { isAuthenticate } = useProtected();

  if (!isAuthenticate) {
    return <Navigate to={"/auth"} replace />;
  }

  return <Outlet />;
};
