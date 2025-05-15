import Login from "../pages/auth/Login";
import PublicGard from "./PublicGuard";

const publicRouter = [
  {
    element: <PublicGard />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default publicRouter;
