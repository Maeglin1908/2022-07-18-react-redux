import { useDispatch, useSelector } from "react-redux";
import { add, decrement, increment } from "./../store/PanierSlice";
import "./../styles/Redux.css";
const Redux = function () {
    const size = useSelector((state) => state?.panier.length);
    const dispatch = useDispatch();
    const products = ["Fraises", "Framboises", "Pêches", "Abricots"];
    function fun_increment() {
        dispatch(increment());
    }
    function fun_decrement() {
        dispatch(decrement());
    }

    return (
        <>
            <h1>Redux</h1>

            <p>
                <code>npm i react-redux</code>
            </p>
            <p>
                <code>npm i @reduxjs/toolkit</code>
            </p>

            <p>Il y a {size} élément(s) dans mon panier.</p>

            <p>
                <button onClick={fun_increment}>Incrémenter</button>
                <button onClick={fun_decrement}>Décrémenter</button>
            </p>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        <button onClick={() => dispatch(add(p))}>Ajouter au panier</button>
                        {p}
                    </li>
                ))}
            </ul>
            <fieldset>
                <legend>Store.js</legend>
                <pre></pre>
            </fieldset>

            <fieldset>
                <legend>PanierStore.js</legend>
                <pre></pre>
            </fieldset>
        </>
    );
};

export default Redux;
