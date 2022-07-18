import { NavLink } from "react-router-dom";
import "./../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/routing">Routing</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
