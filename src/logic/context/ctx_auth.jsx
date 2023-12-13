import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const UseAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("authContext debe ser usado dentro de ScrollProvider");
  }
  return ctx;
};

export function AuthProvider({ children }) {
  const extData = {};

  return (
    <AuthContext.Provider value={extData}>{children}</AuthContext.Provider>
  );
}
