import AccountActivate from "../pages/auth/AccountActivate";
import Activation from "../pages/auth/Activation";
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
      {
        path: "/activate",
        element: <Activation />,
      },
      {
        path: "/activate-account",
        element: <AccountActivate />,
      },
    ],
  },
];

export default publicRouter;
