import axios from "axios";
import { useEffect, useState } from "react";

const Secret = function () {
    const [secrets, setSecrets] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        let headers = {};
        if (token) headers = { Authorization: "Bearer " + token };
        axios
            .get("http://localhost:9876/secrets", {
                headers,
            })
            .then(({ data }) => setSecrets(data))
            .catch(() => setSecrets([{ id: -1, message: "NOT CONNECTED" }]));
    }, []);

    return (
        <>
            <h1>Secret</h1>

            <p>Si vous voyez ceci, c'est que vous êtes connecté.</p>

            <h2>Mes secrets :</h2>
            {secrets.map((s) => (
                <li key={s.id}>{s.message}</li>
            ))}
        </>
    );
};

export default Secret;
