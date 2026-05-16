import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "../context";
import { MainLayout } from "../ui";
import { mainRoutes } from "./config/main.routes";
import { systemRoutes } from "./static";
import { NotFoundPage } from "../pages";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    ),
    // errorElement: <NotFoundPage />,
    children: mainRoutes,
  },
  ...systemRoutes,
]);

export const AppRoutes = () => <RouterProvider router={appRouter} />;
