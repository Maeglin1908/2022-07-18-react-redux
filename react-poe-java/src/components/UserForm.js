import { useForm } from "react-hook-form";
import { create } from "../utils/services/UserService";

export const UserForm = function ({reload}) {
    const { handleSubmit, register } = useForm();

    async function save(user) {
        await create(user);
        reload();
    }
    return (
        <>
            <h2>New User</h2>

            <form onSubmit={handleSubmit(save)}>
                <p>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" {...register("last_name")} />
                </p>
                <p>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" {...register("first_name")} />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("email")} />
                </p>
                <p>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" {...register("gender")}>
                        <option value="">--- Choose a gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="genderfluid">Gender Fluid</option>
                        <option value="agender">Agenre</option>
                        <option value="other">Other</option>
                    </select>
                </p>
                <p>
                    <button type="submit">Save</button>
                </p>
            </form>
        </>
    );
};
