import { useEffect, useState } from "react";
import { getAll } from "../utils/services/UserService";

const Crud = function () {
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        const fetchUsers = async () => {
            const user_response = await getAll();
            setUser(user_response);
        };
    }, []);

    return (
        <>
            <h1>Users Dashboard</h1>

            <article>
                <h2>All Users</h2>
            </article>
        </>
    );
};

export default Crud;
