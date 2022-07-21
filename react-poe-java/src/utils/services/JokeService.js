import axios from "axios";

const url = "https://v2.jokeapi.dev/joke/Programming";

export const getJoke = (type) =>
    axios
        .get(url, {
            params: { type },
        })
        .then((res) => res.data)
        .catch((err) => "Aucune joke à récupérer");
