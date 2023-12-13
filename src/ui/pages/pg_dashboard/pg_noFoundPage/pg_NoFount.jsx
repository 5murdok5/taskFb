import { Link } from "react-router-dom";

const PageNoFount = () => {
  return (
    <div>
      <h2>Pagina no Encontrada</h2>
      <p>
        <Link to="/">Ir a Inicio</Link>
      </p>
    </div>
  );
};

export default PageNoFount;
