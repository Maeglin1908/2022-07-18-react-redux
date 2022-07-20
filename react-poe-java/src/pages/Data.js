import axios from "axios";
import { useState } from "react";

const Data = function () {
    const [joke, setJoke] = useState("");

    function getJoke() {
        axios
            .get("https://v2.jokeapi.dev/joke/Programming?type=single")
            .then(({ data }) => setJoke(data.joke))
            .catch((err) => alert("C'est cassé..."));
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

                <div>
                    <button onClick={getJokeAsync}>Get Joke !</button>
                </div>
                <div className="card">{joke}</div>
            </article>
        </>
    );
};

export default Data;
