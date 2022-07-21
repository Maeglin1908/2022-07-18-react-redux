import axios from "axios";

const url = "http://localhost:6789/users";

export function getAll() {
    return axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => alert("Nope"));
}

// Avec async, juste pour avoir les deux façons de faire.
export async function getById(id) {
    try {
        const { data } = await axios.get(`${url}/${id}`);
        return data;
    } catch {
        alert("Nope");
    }
}

export function getByEmail(email) {
    return axios
        .get(url, {
            params: { email },
        })
        .then((res) => res.data)
        .catch(() => alert("Nopenope"));
}

export function create(user) {
    return axios
        .post(url, user)
        .then((res) => res.data)
        .catch(() => alert("C'est cassé"));
}

export function update(user) {
    return axios
        .put(`${url}/${user.id}`, user)
        .then((res) => res.data)
        .catch(() => alert("C'est cassé"));
}

export function remove(user) {
    const id = typeof user === "number" ? user : user.id;
    return axios
        .delete(`${url}/${id}`)
        .then(() => true)
        .catch(() => alert("C'est cassé"));
}
