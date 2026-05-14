import { authRoutes, publicRoutes } from "../static";

export const mainRoutes = [...publicRoutes, ...authRoutes];
