import { useEffect, useState } from "react";
import { getAll } from "../utils/services/UserService";

const EffetBord = () => {
    const [bool, setBool] = useState(false);

    const [users, setUsers] = useState([]);

    // /!\ ne JAMAIS faire de requête directement dans la fonction ! Risque d'infinite loop !
    // getData();

    // Ici : s'appelle à chaque modification du DOM
    useEffect(() => {
        console.log("In Use Effect - Sans paramètre");
    });

    useEffect(() => {
        console.log("In Use Effect - avec paramètres");
    }, []);

    useEffect(() => {
        console.info("--- Boolean modifié");
    }, [bool]); // On passe dans le tableau les valeurs à surveiller (dépendances)

    const loadUsers = function () {};

    useEffect(() => {
        getAll().then((res) => setUsers(res));
    }, []);

    useEffect(() => {
        let secondes = 0;
        let interval = setInterval(() => {
            secondes++;
            console.log("--- Last update : ", secondes);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1>Effet de bord</h1>

            <article>
                <h2>Présentation</h2>
                <p>
                    <button onClick={() => setBool(!bool)}>Modifier le Dom</button>
                </p>
                <p>Valeur du boolean : {bool.toString()}</p>

                <p>La fonction composant s'exécute à chaque mise à jour du DOM.</p>
                <p>
                    Par conséquent, il ne faut <b>SURTPOUT PAS</b> y faire directement un appel API, ou de manière
                    générale, y modifier des hook d'état / le DOM, sous peine de créer une boucle infinie.
                </p>
            </article>
            <article>
                <h2>Présentation du Hook d'état</h2>

                <p>
                    Le hook d'effet, <code>useEffect</code>, permet d'agir lors de la mise à jour du composant, ou de
                    valeurs.
                </p>
                <p>Il s'éxécute dès la première initialisation du composant.</p>
                <p>
                    Il permet de faire des effets de bords : actions réalisées suite à un évènement (initialisation du
                    composant, modification d'une ou plusieurs valeurs, destruction du composant).
                </p>

                <h3>Premier paramètre</h3>

                <p>C'est une fonction qui prend en premier paramètre une callback.</p>
                <p>
                    <code>useEffect(() ={">"} // du stuff)</code>
                </p>

                <ul>
                    {users.map((u) => (
                        <li key={u.id}>{u.email}</li>
                    ))}
                </ul>

                <h3>Deuxième paramètre</h3>

                <p>En deuxième paramètre c'est la/les valeurs à surveiller.</p>
                <p>
                    S'il n'y a aucune valeur à surveiller, le contenu de <i>useEffect()</i> s'exécutera simplement à
                    l'initialisation du composant.
                </p>
                <pre>{"useEffect(() => {"}</pre>
                <pre>{"    getAll().then((res) => setUsers(res));"}</pre>
                <pre>{"}, []);"}</pre>
                <p>={">"} s'exécute uniquement lors de l'initialisation.</p>

                <p>Sinon, il s'exécutera uniquement lors de la modif de ces valeurs.</p>
                <pre>{"useEffect(() => {"}</pre>
                <pre>{'    console.info("--- Boolean modifié");'}</pre>
                <pre>{"}, [bool]);"}</pre>
                <p>
                    ={">"} s'exécute uniquement lors de la modif de <code>bool</code>.
                </p>

                <p>
                    <strong>Ne pas modifier</strong> un élément à l'intérieur d'un <i>useEffect()</i> qui surveille ce
                    même élément !
                </p>
                <p>
                    Toutes les valeurs utilisées dans le hook doivent être déclarées dans <i>useEffect()</i>.
                </p>

                <p>Créer un interval au chargement du composent, et le coupe à la destruction du composant.</p>
                <p>A utiliser pour les souscriptions à des flux, à des websockets....</p>
                <pre>{"    useEffect(() => {"}</pre>
                <pre>{"        let secondes = 0;"}</pre>
                <pre>{"        let interval = setInterval(() => {"}</pre>
                <pre>{"            secondes++;"}</pre>
                <pre>{'            console.log("--- Last update : ", secondes);'}</pre>
                <pre>{"        }, 1000);"}</pre>
                <pre>{"        return () => clearInterval(interval);"}</pre>
                <pre>{"    }, []);"}</pre>
            </article>
        </>
    );
};

export default EffetBord;
