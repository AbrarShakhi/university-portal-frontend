import Welcome from "../pages/menu/Welcome";
import Home from "../pages/User/Home";
import PrivateGard from "./PrivateGuard";

const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        path: "/std-home",
        element: <Home />,
        children: [
          {
            path: "welcome",
            element: <Welcome />,
          },
        ],
      },
    ],
  },
];

export default privateRouter;
