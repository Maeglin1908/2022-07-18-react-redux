import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { UserForm } from "../components/UserForm";
import { getAll } from "../utils/services/UserService";

const Crud = function () {
    const [users, setUser] = useState([]);

    const [update, setUpdate] = useState(0);
    useEffect(() => {
        console.log("useEffect 1");
        const fetchUsers = async () => {
            const user_response = await getAll();
            setUser(user_response);
        };
        fetchUsers();
    }, [update]);

    return (
        <>
            <h1>Users Dashboard</h1>

            <p>
                <i>
                    Ne pas oublier de lancer <code>npm run api</code>
                </i>
            </p>
            <article>
                <UserForm reload={() => setUpdate(update + 1)} />
            </article>
            <article>
                <h2>All Users</h2>
                <div className="grid">
                    {users.map((u) => (
                        <UserCard key={u.id} user={u} />
                    ))}
                </div>
            </article>
        </>
    );
};

export default Crud;
