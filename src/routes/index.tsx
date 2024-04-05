import { createBrowserRouter } from "react-router-dom";
import { Auth } from "../modules/auth";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
]);
