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
                <li>
                    <NavLink style={{ color: "red" }} to="/projet">
                        Projet fil rouge
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statics">Données statics</NavLink>
                </li>
                <li>
                    <NavLink to="/props">Les Props</NavLink>
                </li>
                <li>
                    <NavLink to="/reactivity">La Réactivité</NavLink>
                </li>
                <li>
                    <NavLink to="/forms">Les Formulaires</NavLink>
                </li>
                <li>
                    <NavLink to="/async">L'asynchrone avec Axios</NavLink>
                </li>
                <li>
                    <NavLink to="/effetbord">Effets de bord</NavLink>
                </li>
                <li>
                    <NavLink to="/crud">CRUD</NavLink>
                </li>
                <li>
                    <NavLink to="/auth">Authentication</NavLink>
                </li>
                <li>
                    <NavLink to="/secret">Secret</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
