import { emitHealthCheckFailed, emitSessionExpired } from "@/utils";
import axios from "axios";

console.log(import.meta.env.VITE_BACKEND_BASE_URL);

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (request) => request,
  (err) => err,
);

apiClient.interceptors.response.use(
  (response) => response,
  (err) => {
    const originalRequest = err.config;
    const status = err.response?.status;

    const isHealthCheck = originalRequest?.url?.includes("/health");

    const isAuthMe = originalRequest?.url?.includes("/auth/me");
    const isRefreshToken = originalRequest?.url?.includes("/refresh-token");
    const isLogin = originalRequest?.url?.includes("/login");

    if (isHealthCheck) {
      emitHealthCheckFailed();
      return Promise.reject(err);
    }

    if ((isRefreshToken || isLogin || isAuthMe) && status === 401) {
      emitSessionExpired();
      return Promise.reject(err);
    }

    return Promise.reject(err);
  },
);
