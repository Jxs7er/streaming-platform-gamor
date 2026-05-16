import { createBrowserRouter, RouterProvider } from "react-router";
import { LoadingProvider, ThemeProvider } from "../context";
import { MainLayout } from "../ui";
import { mainRoutes } from "./config/main.routes";
import { systemRoutes } from "./static";
import { NotFoundPage } from "../pages";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoadingProvider>
        <ThemeProvider>
          <MainLayout />
        </ThemeProvider>
      </LoadingProvider>
    ),
    // errorElement: <NotFoundPage />,
    children: mainRoutes,
  },
  ...systemRoutes,
]);

export const AppRoutes = () => <RouterProvider router={appRouter} />;
