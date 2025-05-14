import Home from "../pages/auth/Home";
import PrivateGard from "./PrivateGuard";

const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default privateRouter;
