import { AuthServices } from "@/services/modules";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(false);

  const logout = async () => {
    try {
      await AuthServices.logout();
    } catch (err) {
      console.warn("Logout failed or not implemented in backend");
    }
    setUser(null);
  };

  useEffect(() => {
    const initSession = async () => {
      try {
        const userData = await AuthServices.me();
        setUser(userData);
      } catch (err) {
        setUser(null);
      } finally {
        setInitializing(false);
      }
    };
    initSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, setInitializing, initializing, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
