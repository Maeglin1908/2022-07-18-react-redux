import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { getAll } from "../utils/services/UserService";

const Crud = function () {
    const [users, setUser] = useState(undefined);
    useEffect(() => {
        console.log("useEffect 1");
        const fetchUsers = async () => {
            const user_response = await getAll();
            setUser(user_response);
        };
        fetchUsers();
    }, []);

    return (
        <>
            <h1>Users Dashboard</h1>

            <article>
                <h2>All Users</h2>

                <div className="grid">{users && users.map((u) => <UserCard key={u.id} user={u} />)}</div>
            </article>
        </>
    );
};

export default Crud;
