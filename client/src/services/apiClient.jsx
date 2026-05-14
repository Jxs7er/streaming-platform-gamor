import axios from "axios";

export const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: true,
});

// Interceptores de peticiones
// Insertar el JWT para las rutas requeridas
apiClient.interceptors.request.use(
  (request) => request,
  (err) => err,
);

// Interceptores de respuesta
apiClient.interceptors.response.use(
  (response) => response,
  (err) => err,
);
