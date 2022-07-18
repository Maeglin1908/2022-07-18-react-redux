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

import './Presentation.css';

function Presentation() {
    const message = 'Vive les JSX !!!';
    const jsx_var = <span>Du JSX depuis une variable</span>
    const ma_class = "red";
    const img1_url = "https://picsum.photos/200/300";
    const image = {
        name : "Test image name",
        description : "une description d'image test",
        url :"https://picsum.photos/300/200"
    }

    // Retourne du JSX
    return (
        <>

            <div id="Presentation">
                <h1>Présentation</h1>
                <article>
                    <h2>Les JSX</h2>

                    <p>Les JSX sont une extension syntaxique de Javascript. Ce n'est ni une chaine de caractères, ni du HTML</p>
                    <p>En React, n conseille d'utiliser les JSX pour retourner le template.</p>
                    <hr/>
                    <p>Les JSX permettent d'interpoler du JS à l'intérieur des balises, en utilisant des accolades.</p>
                    <ul>
                        <li>Opération : 1 + 1 = { 1 + 1 }</li>
                        <li>Variables : {message}</li>
                        <li>Template ES6  (avec des backquotes autour) : {`Mon message : ${ message }`}</li>
                        <li>String : {"Coucou en string brut"}</li>
                        <li>{jsx_var}</li>
                    </ul>

                    <p>Attention : certaines chaines de caractères doivent être échappées pour pouvoir les afficher.</p>
                    <p>C'est le cas des accolades : {"{'{'}"} => {'{'}</p>

                </article>

                <article>
                    <h2>Les attributs</h2>

                    <p>Certains attributs HTML s'écrivent différemment en JSX.</p>
                    <p>Le JSX est plus proche du JS que du HTML : Les mots clés réservés en JS ne peuvent pas être utilisés.</p>
                    <p>De plus, en HTML, on peut être amené à utiliser du kebab-case, en JS le kebab-case est interdit. Il faut utiliser du camelCase.</p>
                    <ul id="list" className="list-inline">
                        <li>{'class -> className'}</li>
                        <li>{'for -> htmlFor'}</li>
                        <li>{'tabindex -> tabIndex'}</li>
                    </ul>

                    <p>Les attributs HTML peuvent prendre en valeur une string, entre "" comme en HTML classique : id="monId"</p>
                    <p className={ma_class}>Mais ils peuvent également interpoler du JS, grâce aux accolades. : className={'{'}ma_class{'}'} </p>

                    <div className="img-container">
                        <img src={img1_url}/>
                    </div>

                    <p>Pour déclarer une structure littérale (pour l'utiliser comme un objet) :</p>
                    <pre>{'const image = {\n\tname : "Test image name",\n\tdescription : "une description d\'image test",\n\turl :"https://picsum.photos/300/200"\n}'}</pre>

                    <figure>
                        <img src={image.url} alt={image.description} />
                        <figcaption>{image.name}</figcaption>
                    </figure>
                </article>
            </div>

        </>
    )
}

export default Presentation;