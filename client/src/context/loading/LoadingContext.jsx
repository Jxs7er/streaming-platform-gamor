import { SystemServices } from "@/services/modules";
import { SplashScreen } from "@/ui";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const fetchHealthy = async () => {
      try {
        const response = await SystemServices.healthCheck();
        if (!response.ok) navigate("/system/access-denied");
      } catch (error) {
        // Notificacion
      }
    };

    fetchHealthy();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <SplashScreen />}
      {!loading && children}
    </LoadingContext.Provider>
  );
};
export default LoadingProvider;

export const useLoading = () => useContext(LoadingContext);
