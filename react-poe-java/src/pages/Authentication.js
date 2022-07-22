import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./../styles/Authentication.css";

const Authentication = function () {
    const { handleSubmit, register } = useForm();
    const [page, setPage] = useState("login");

    // Rien à voir avec auth, mais avec Redux. Parce que flemme.
    const panier = useSelector((state) => state?.panier.values);

    const url = "http://localhost:9876";

    async function login(user) {
        try {
            if (page === "login") {
                const { data } = await axios.post(`${url}/login`, user);
                console.log("Connecté ", data);
                localStorage.setItem("token", data.accessToken);
            } else if (page === "register") {
                const { data } = await axios.post(`${url}/register`, user);
                console.log("Inscrit ", data);
            }
        } catch (error) {
            console.log(error.toJSON());
        }
    }
    console.log("PANIER");
    console.log(panier);
    return (
        <>
            <h1>Authentication</h1>

            <article>
                <h2>Connexion / Inscription</h2>

                <p>La logique d'inscription / connexion reste la même que sur des formulaires classiques.</p>
                <p>Pour l'inscription, il faut faire un post d'un nouvel utilisateur.trice.</p>
                <p>
                    Pour la connexion, il faut faire un post d'un objet contenant les infos d'authentification (login /
                    email / mot de passe).
                </p>

                <p>Pour un fake server d'authentification, on peut utiliser :</p>
                <fieldset>
                    <legend>Npm command</legend>
                    <code>npm i -g json-server-auth</code>
                </fieldset>
                <fieldset>
                    <legend>package.json</legend>
                    <code>"auth": "json-server-auth ./db/db.json --port 9876"</code>
                </fieldset>
                <hr />
                <nav>
                    <button onClick={() => setPage("login")}>Connexion</button>
                    <button onClick={() => setPage("register")}>Inscription</button>
                </nav>

                <h3>{page}</h3>
                <form onSubmit={handleSubmit((user) => login(user))}>
                    <fieldset>
                        <legend>{page}</legend>

                        <p>
                            <label htmlFor="email">email</label>
                            <input type="text" nbame="email" {...register("email")} />
                        </p>
                        <p>
                            <label htmlFor="password">Mot de passe</label>
                            <input type="text" id="password" {...register("password")} />
                        </p>
                        <p>
                            <span></span>
                            <button type="submit">{page}</button>
                        </p>
                    </fieldset>
                </form>
            </article>

            <article>
                <h2>Mon Panier</h2>

                <ul>
                    {panier.map((el) => (
                        <li key={el.id}>{el}</li>
                    ))}
                </ul>
            </article>
        </>
    );
};

export default Authentication;
