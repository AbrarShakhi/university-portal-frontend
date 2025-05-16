import Home from "../pages/auth/Home";
import PrivateGard from "./PrivateGuard";

const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        path: "/std-home",
        element: <Home />,
      },
    ],
  },
];

export default privateRouter;
