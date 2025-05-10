import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";

// create browser router
const router = createBrowserRouter([
  {
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

// export router
export default router;
