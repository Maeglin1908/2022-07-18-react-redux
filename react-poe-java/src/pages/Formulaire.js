import { useState } from "react";

const Formulaire = function () {
    const [book, setBook] = useState("L'Assassin Royal");
    const [bookError, setBookError] = useState(false);
    function saveBook(event) {
        event.preventDefault();
        const newBook = event.target?.book.value.trim();
        if (newBook) {
            setBook(newBook);
            setBookError(false);
            event.target.reset();
        } else {
            setBookError(true);
        }
    }
    const [command, setCommand] = useState({});

    function handleOrder(event) {
        event.preventDefault();
        const form = event.target;
        const newOrder = {};
        for (let i = 0; i < form.length; i++) {
            const input = form[i];
            const value = input.value;
            const type = input.type;
            const name = input.name;
            const checked = ["checkbox", "radio"];
            if (input.name) {
                if (input.type === "checkbox") {
                    if (input.checked) {
                        newOrder[input.name] ??= [];
                        newOrder[input.name].push(input.value);
                    }
                } else if (input.type === "radio") {
                    if (input.checked) {
                        newOrder[input.name] = input.value;
                    }
                } else {
                    newOrder[input.name] = input.value;
                }
            }
        }
        setCommand(newOrder);
        console.log(newOrder);
    }

    return (
        <>
            <h1>Les formulaires</h1>
            <article>
                <h2>Formulaire simple</h2>

                <p>Votre livre préféré : {book}</p>

                <form action="" onSubmit={saveBook}>
                    <div>
                        <label htmlFor="book">Favorite book : </label>
                        <input id="book" name="book" type="text" />
                        {bookError && (
                            <p className="error" style={{ color: "red" }}>
                                Veuillez entrer un titre
                            </p>
                        )}
                    </div>
                    <button type="submit">Save</button>
                </form>
            </article>

            <article>
                <h2>Formulaire plus complexe</h2>

                <form onSubmit={handleOrder}>
                    <div>
                        <label htmlFor="plat">Plat : </label>
                        <input type="text" name="plat" />
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantité : </label>
                        <input type="number" name="quantity" />
                    </div>
                    <div>
                        <label htmlFor="dessert">Dessert : </label>
                        <select name="dessert" id="dessert">
                            <option value="">--- Choisir un dessert</option>
                            <option value="tiramisu">Tiramisu</option>
                            <option value="fruits">Salade de fruits</option>
                            <option value="glace">Glace</option>
                        </select>
                    </div>

                    <fieldset>
                        <legend>Suppléments</legend>
                        <p>
                            <input type="checkbox" id="sup1" name="sup" value="maroille" />
                            <label htmlFor="sup1">Maroille</label>
                        </p>
                        <p>
                            <input type="checkbox" id="sup2" name="sup" value="biere" />
                            <label htmlFor="sup2">Bière</label>
                        </p>
                        <p>
                            <input type="checkbox" id="sup3" name="sup" value="speculoos" />
                            <label htmlFor="sup3">Spéculoos</label>
                        </p>
                    </fieldset>

                    <fieldset>
                        <legend>Sur place ou à emporter</legend>

                        <p>
                            <input type="radio" name="place" id="p1" value="place" />
                            <label htmlFor="p1">Sur Place</label>
                        </p>
                        <p>
                            <input type="radio" name="place" id="p2" value="emporter" />
                            <label htmlFor="p2">A Emporter</label>
                        </p>
                    </fieldset>

                    <p>
                        <button type="submit">Valider la commande</button>
                    </p>
                </form>
                <p>{JSON.stringify(command)}</p>
            </article>
        </>
    );
};

export default Formulaire;
