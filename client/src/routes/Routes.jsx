import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider, LoadingProvider, ThemeProvider } from "../context";
import { MainLayout } from "../ui";
import { mainRoutes } from "./config/main.routes";
import { systemRoutes } from "./static";
import { NotFoundPage } from "../pages";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoadingProvider>
        <AuthProvider>
          <MainLayout />
        </AuthProvider>
      </LoadingProvider>
    ),
    errorElement: <NotFoundPage />,
    children: mainRoutes,
  },
  ...systemRoutes,
]);

export const AppRoutes = () => <RouterProvider router={appRouter} />;
