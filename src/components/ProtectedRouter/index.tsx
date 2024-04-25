import { Navigate } from "react-router-dom";
import { useProtected } from "./hooks/use-protected";

export const ProtectedRouter = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useProtected();

  if (!isAuthenticated) {
    return <Navigate to={"/auth"} replace />;
  }

  return children;
};
