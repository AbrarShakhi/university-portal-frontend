import Advising from "../pages/menu/Advising";
import ChangePassword from "../pages/menu/ChangePassword";
import Faculty from "../pages/menu/Faculty";
import GradeReport from "../pages/menu/GradeReport";
import Ledger from "../pages/menu/Ledger";
import Profile from "../pages/menu/Profile";
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
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "advising",
            element: <Advising />,
          },
          {
            path: "faculty",
            element: <Faculty />,
          },
          {
            path: "ledger",
            element: <Ledger />,
          },
          {
            path: "grade-report",
            element: <GradeReport />,
          },
        ],
      },
    ],
  },
];

export default privateRouter;
