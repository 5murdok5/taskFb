# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Create project

- pnpm create vite taskapp --template react

# Check Version Pnp

- pnpm --version ^ 8.12.1

# init install proyect

- pnpm i dotenv firebase react-hot-toast react-loading-skeleton react-router-dom

# config dev dependencies

- pnpm i -d eslint @types/react prettier

# config eslint (Formato Codigo)

- pnpm create @eslint/config

# install types

- pnpm i -d @types/react

# install config eslint

- pnpm i -d stylelint-config-idiomatic-order stylelint-config-idiomatic-order

# BASE DE CONTEXTO REACT JS

`
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
const extData = {};

return (
<AuthContext.Provider value={extData}>{children}</AuthContext.Provider>
);
}
`
