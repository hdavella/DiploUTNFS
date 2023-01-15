import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "activo" : undefined)}>Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/LaEmpresa" className={({ isActive }) => (isActive ? "activo" : undefined)}>La Empresa</NavLink>
          </li>
          <li>
            <NavLink to="/Servicios" className={({ isActive }) => (isActive ? "activo" : undefined)}>Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className={({ isActive }) => (isActive ? "activo" : undefined)}>Contacto</NavLink>
          </li>
        </ul>
      </div>
    </nav>

  );
}
export default Nav;

