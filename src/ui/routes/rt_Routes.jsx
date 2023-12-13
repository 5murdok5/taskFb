import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitPages from "../pages/pg_allContainer/pg_allContainer";
import PageTasks from "../pages/pg_dashboard/pg_dashSubPages.jsx/pg_sbpg_tasks/pg_Tasks";
import ContainerDashBoard from "../pages/pg_dashboard/pg_dashboard";
import PageNoFount from "../pages/pg_dashboard/pg_noFoundPage/pg_NoFount";
import PageLogin from "../pages/pg_login/pg_Login";
import { Navigate } from "react-router-dom";
/**
 * El archivo contiene unicamente las Rutas dentro de todo el sistema
 *
 *
 */

const RoutesPages = () => {
  return (
    //PROBLEMA
    //* rutas ya no usan / al inicio
    //* falta oulet para referenciar el contenido total del elemento
    //* para cualqueir ruta ya sea dentro o fuera se usa * para enviar cualquier ruta que no exista a esa

    //* CONTENERISACION de RUTAS route dentro de route

    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navigate to="login" />} />
        <Route path="/" element={<InitPages />}>
          <Route path="login" element={<PageLogin />} />
          <Route path="/login/:type" element={<PageLogin />} />
          <Route path="*" element={<PageNoFount />} />
        </Route>
        <Route path="/dashboard/*" element={<ContainerDashBoard />}>
          {/* MOSTRAR CREAR */}
          <Route path="task" element={<PageTasks />} />
          {/* MOSTRAR NOTAS */}
          <Route path="task/:type" element={<PageTasks />} />
          <Route path="*" element={<PageNoFount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPages;
