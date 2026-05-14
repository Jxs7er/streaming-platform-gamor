// import HomePage from "../../pages/home/home.page";

import { Navigate } from "react-router";
import { ForbiddenPage, NotFoundPage } from "../../pages";

const redirect = (to) => <Navigate to={to} />;

const systemRoutes = [
  {
    path: "/system/not-found",
    element: <NotFoundPage />,
  },
  {
    path: "/system/access-denied",
    element: <ForbiddenPage />,
  },

  //  Redirecciones
  {
    path: "/not-found",
    element: redirect("/system/not-found"),
  },
];

export default systemRoutes;
