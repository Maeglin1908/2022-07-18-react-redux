import { useState } from "react";

const Reactivity = () => {
    let counter = 0;
    const [counter2, setCounter] = useState(10);
    //Counter2 : variable qui contient l'état de la valeur passée dans useState
    //setCounter : fonction qui permet de mettre à jour la valeur

    const [user, setUser] = useState({ prenom: "John" });
    const [is_logged, setLogged] = useState(false);
    const [fruits, setFruits] = useState(["Pêche", "Abricot", "Pomme"]);

    function addFruit() {
        const updated = [...fruits];
        updated.push("Gingembre");
        setFruits(updated);
    }

    function changeUser() {
        // setUser({ prenom: "Jean" }); // pour modifier l'élément
        //setUser({nom : "Snow"}) // Ca écraserait le prenom
        const updated = { ...user };
        updated.nom = "Neige";
        updated.prenom = "Jean";
        setUser(updated);
    }

    function boom(event) {
        console.log(event);
        alert("Boom !");
    }

    function choose(choice) {
        alert(`Vous avez choisi : ${choice}`);
    }

    function handleChoice(event) {
        alert(event.target.dataset.nomdedata);
    }

    function increment() {
        counter++;
        console.log("Compteur incrémenté, valeur actuelle : ", counter);
    }

    function increment2() {
        setCounter(counter2 + 1);
    }

    return (
        <>
            <h1>Reactivité</h1>

            <article>
                <h2>Evénements</h2>

                <p>
                    En React, on gère les éléments comme en HTML : avec les attributs d'évenement (onClick, onSubmit,
                    onMouseOver ... )
                </p>
                <p>
                    On passe la fonction à appeler entre accolades, et sans parenthèses : React fournit automatiquement
                    le paramètre Event à la fonction appelée.
                </p>
                <p>
                    <button onClick={boom}>Ne cliquez pas ici !</button>
                </p>

                <p>Votre choix ?</p>
                <pre>{'<button onClick={() => choose("salade")}>Salade</button>'}</pre>
                <pre>{'<button onClick={() => choose("tomates")}>Tomates</button>'}</pre>
                <pre>{'<button data-nomdedata="oignons" onClick={handleChoice}>Oignons</button>'}</pre>
                <p>{'=> On peut mettre n\'importe quel nom de "data-truc" pour les datasets.'}</p>
                <p className="btn-container">
                    <button onClick={() => choose("salade")}>Salade</button>
                    <button onClick={() => choose("tomates")}>Tomates</button>
                    <button data-nomdedata="oignons" onClick={handleChoice}>
                        Oignons
                    </button>
                </p>
            </article>

            <article>
                <h2>Compteur 1 : {counter}</h2>

                <p>
                    <button onClick={increment}>Incrémenter</button>
                </p>

                <p>
                    La modification de compteur se fait bien, mais React ne met pas à jour le DOM de manière dynamique.
                </p>
            </article>
            <article>
                <h2>Hook d'état</h2>
                <pre>{"const [counter2, setCounter] = useState(10);"}</pre>
                <pre>{"function increment2() {"}</pre>
                <pre>{"     setCounter(counter2 + 1);"}</pre>
                <pre>{"}"}</pre>
                <p>
                    Compteur dynamique : <b>{counter2}</b>
                </p>
                <p>
                    <button onClick={increment2}>Incrémenter</button>
                </p>

                <p>
                    Pour indiquer à Réact d'écouter des valeurs pour mettre à jour le DOM, il faut utiliser les Hooks.
                </p>
                <p>Le hook d'effet, useState, permet de gérer l'état d'une donnée.</p>
                <p>useState() retourne un tableau contenant 2 valeurs :</p>
                <ul>
                    <li>L'état actuel de la valeur</li>
                    <li>Une fonction permettant de modifier cet état</li>
                </ul>

                <p>De manière "classique", pour récupérer ces valeurs :</p>
                <p>
                    <code>const state = userState('truc')</code>
                </p>
                <p>
                    <code>const value = state[0]</code>
                </p>
                <p>
                    <code>const setValue = state[1]</code>
                </p>

                <p>La décomposition permet de le faire en une seule ligne :</p>
                <p>
                    <code>const [value, setValue] = useState('truc')</code>
                </p>

                <p>
                    Dans un composant, on peut déclarer autant de hook d'état qu'on le souhaite, et ils peuvent prendre
                    tout type de valeur.
                </p>

                <ul>
                    <li>
                        <code>const [str, setStr] = useState('hello worl')</code>
                    </li>
                    <li>
                        <code>const [arr, setArr] = useState([])</code>
                    </li>
                    <li>
                        <code>const [obj, setObj] = useState(new Game())</code>
                    </li>
                </ul>
                <p>
                    <button onClick={changeUser}>Clique pour changer</button>
                    {user.prenom} {user.nom}
                </p>

                <h3>Booleans</h3>
                <div>{is_logged ? <p>Vous êtes connecté</p> : <p>Vous n'êtes pas connecté</p>}</div>
                <pre>{"<button onClick={ () => setLogged( !is_logged ) }>"}</pre>
                <pre>{'{is_logged ? "Déconnexion" : "Connexion"}'}</pre>
                <pre>{"</button>"}</pre>
                <p>
                    <button onClick={() => setLogged(!is_logged)}>{is_logged ? "Déconnexion" : "Connexion"}</button>
                </p>

                <h3>Tableaux</h3>

                <p>
                    <button onClick={addFruit}>Add fruit</button>
                </p>
                <ul>
                    {fruits.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>
            </article>
        </>
    );
};

export default Reactivity;
