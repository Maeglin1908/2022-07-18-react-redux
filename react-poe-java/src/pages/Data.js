import axios from "axios";
import { useState } from "react";
import { getJoke } from "./../utils/services/JokeService";
const Data = function () {
    const [joke, setJoke] = useState("");
    const [joke2, setJoke2] = useState({});

    function loadSingle() {
        getJoke("single").then((data) => setJoke(data.joke));
    }
    function loadTwoPart() {
        getJoke("twopart").then(({ setup, delivery }) => setJoke2({ setup, delivery }));
    }
    function loadJoke() {
        getJoke().then((joke) => setJoke(joke));
    }
    async function asyncLoadJoke() {
        const joke = await getJoke();
        setJoke(joke);
    }

    async function getJokeAsync() {
        try {
            const {
                data: { joke },
            } = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=single");
            setJoke(joke);
        } catch {
            alert("OUps c'est encore cassé ...");
        }
    }
    return (
        <>
            <h1>Gérer les requêtes</h1>

            <article>
                <h2>Using Axios directly in this component</h2>
                <div>
                    <p>
                        <strong>Methode 1 :</strong>
                    </p>
                    <pre>{"function getJoke() {"}</pre>
                    <pre>{"    axios"}</pre>
                    <pre>{'        .get("https://v2.jokeapi.dev/joke/Programming?type=single")'}</pre>
                    <pre>{"        .then(({ data }) => setJoke(data.joke))"}</pre>
                    <pre>{'        .catch((err) => alert("C\'est cassé..."));'}</pre>
                    <pre>{"}"}</pre>
                </div>
                <div>
                    <p>
                        <strong>Methode 2 :</strong>
                    </p>
                    <pre>{"async function getJokeAsync() {"}</pre>
                    <pre>{"    try {"}</pre>
                    <pre>{"        const {"}</pre>
                    <pre>{"            data: { joke },"}</pre>
                    <pre>{'        } = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=single");'}</pre>
                    <pre>{"        setJoke(joke);"}</pre>
                    <pre>{"   } catch {"}</pre>
                    <pre>{'       alert("OUps c\'est encore cassé ...");'}</pre>
                    <pre>{"    }"}</pre>
                    <pre>{"}"}</pre>
                </div>
            </article>
            <article>
                <h2>Using JokeService</h2>
                <div>
                    <p>
                        <b>JokeService.js</b>
                    </p>
                    <pre>{'const url = "https://v2.jokeapi.dev/joke/Programming";'}</pre>
                    <pre>{""}</pre>
                    <pre>{"export const getJoke = (type) =>"}</pre>
                    <pre>{"    axios"}</pre>
                    <pre>{"        .get(url, {"}</pre>
                    <pre>{"            params: { type },"}</pre>
                    <pre>{"        })"}</pre>
                    <pre>{"        .then((res) => res.data)"}</pre>
                    <pre>{'        .catch((err) => "Aucune joke à récupérer");'}</pre>
                </div>

                <div>
                    <p>
                        <b>Bouton 1</b>
                    </p>
                    <pre>{"function loadSingle() {"}</pre>
                    <pre>{'    getJoke("single").then((data) => setJoke(data.joke));'}</pre>
                    <pre>{"}"}</pre>
                    <button onClick={loadSingle}>Get Joke !</button>
                </div>
                <div className="card">{joke}</div>
                <div>
                    <p>
                        <b>Bouton 2</b>
                    </p>
                    <pre>{"function loadTwoPart() {"}</pre>
                    <pre>{'    getJoke("twopart").then(({ setup, delivery }) => setJoke2({ setup, delivery }));'}</pre>
                    <pre>{"}"}</pre>
                    <button onClick={loadTwoPart}>Get Joke two part !</button>
                </div>
                <div className="card">
                    {joke2?.setup}
                    <br />
                    {joke2?.delivery}
                </div>
            </article>
        </>
    );
};

export default Data;
