import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/auth/Home";

// create browser router
const router = createBrowserRouter([
  {
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/std-home",
        element: <Home />,
      },
    ],
  },
]);

// export router
export default router;
