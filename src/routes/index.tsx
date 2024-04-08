import { createBrowserRouter } from "react-router-dom";
import { Auth } from "../modules/auth";
import { Home } from "../modules/home";
import { AuthProvider } from "../providers/AuthProvider";
import { ProtectedRouter } from "../components/ProtectedRouter";

export const routers = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        element: <ProtectedRouter />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
