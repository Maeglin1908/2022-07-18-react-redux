/*
Alternatives :
const Presentation = function() {
    return (
        <div>
            <p>Coucou</p>
        </div>>
        )
}

const Presentation = () => (
        <div>
            <p>Coucou</p>
        </div>>
        )
*/

function Presentation() {
    // Retourne du JSX
    return (
        <div>
            <h1>Présentation</h1>
            <article>
                <h2>Les JSX</h2>

                <p>Les JSX sont une extension syntaxique de Javascript. Ce n'est ni une chaine de caractères, ni du HTML</p>

            </article>
        </div>
    )
}

export default Presentation;