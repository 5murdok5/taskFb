import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const UseAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("authContext debe ser usado dentro de AuthProvider");
  }
  return ctx;
};

export function AuthProvider({ children }) {
  const initValues = {
    userAuth: undefined,
    userData: undefined,
    load: false,
  };
  const [values, setValues] = useState(initValues);

  const loginUser = () => {};

  const extData = {
    //?--VARIABLES
    values,

    //?--Funciones
    loginUser,
  };

  return (
    <AuthContext.Provider value={extData}>{children}</AuthContext.Provider>
  );
}
