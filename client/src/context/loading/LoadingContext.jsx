import { SplashScreen } from "@/ui";
import { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
