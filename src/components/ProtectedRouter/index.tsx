import { Navigate } from "react-router-dom";
import { useProtected } from "./hooks/use-protected";

export const ProtectedRouter = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticate } = useProtected();

  if (!isAuthenticate) {
    return <Navigate to={"/auth"} replace />;
  }

  return { children };
};
