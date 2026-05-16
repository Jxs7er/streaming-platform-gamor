import { HomePage, RegisterPage, SignInPage } from "@/pages";

const authRoutes = [
  {
    path: "/auth",
    children: [
      { path: "signin", element: <SignInPage /> },
      { path: "signup", element: <RegisterPage /> },
    ],
  },
];

export default authRoutes;
