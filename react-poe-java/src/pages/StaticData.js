import WeekDay from "../components/WeekDay";
import { roleFilter } from "../utils/filter/EnumFilter";

const StaticData = () => {
  const message = "Mon message";
  const jsx = <p>Mon message en jsx</p>;

  const date = new Date();

  const fruits = ["Fraises", "Framboises", "Abricots", "Raisins"];
  function getMessage() {
    return (
      <>
        <p>Un paragraphe par la fonction getMessage()</p>
        <p>Un autre paragraphe par la fonction getMessage()</p>
      </>
    );
  }

  function getDayJSX() {
    switch (date.getDay()) {
      case 1:
        return <p>Oh no, it's monday !</p>;

      case 2:
      case 3:
        return <p>Courage !</p>;
      case 4:
        return <p>Last day before week-end !</p>;
      case 5:
      case 6:
        return <p> Go to the party !</p>;
      case 0:
        return <p>Have a good rest....</p>;
      default:
        return <p>Whoot... ?</p>;
    }
  }

  const WeekEnd = () => <p> C'est le Week End !!! </p>;

  function getDayJSX_moreComplex() {
    const weekend = [0, 6];
    const date = 6;
    if (weekend.includes(date)) {
      //if (weekend.includes(date.getDay())) {
      return WeekEnd();
    }
    return <WeekDay />;
  }

  const is_logged = true;
  return (
    <>
      <h1>Données statics</h1>

      <article>
        <h2>Rappels</h2>

        <p>{message}</p>
        {jsx}
        {getMessage()}
      </article>

      <article>
        <h2>Affichage conditionnel</h2>

        <p>On peut utiliser la puissance des JSX pour faire de l'affichage conditionnel :</p>
        <h3>Ternaire</h3>
        <p>
          Dans le cas où c'est un texte simple et court à modifier, afficher conditionnellement, on peut afficher du
          ternaire dans les JSX :
        </p>
        <p>Exemple :</p>
        <p>
          Exemple (avec des strings) : {'{is_logged ? "vous êtes connecté.e" : "Veuillez vous connecter"}'}
          <br />
          {is_logged ? "Vous êtes connecté.e" : "Veuillez vous connecter"}
        </p>
        <p>
          Exemple (avec JSX) : {"{is_logged ? <i>Vous êtes connecté.e</i> : <i>Veuillez vous connecter</i>}"}
          <br />
          {is_logged ? <i>Vous êtes connecté.e</i> : <i>Veuillez vous connecter</i>}
        </p>

        <p>
          <i>
            Dans les deux cas, on peut remplacer les chaînes écrites en dur par des constantes, des variables, par des
            composants
          </i>
        </p>

        <p>Dans le cas où l'affichage est plus complexe, on va plutôt passer par une ou des fonctions :</p>
        <p>Exemple avec un switch :</p>
        <code>{"{getDayJSX()}"}</code>
        {getDayJSX()}

        <p>Exemple avec des JSX plus "complexes" :</p>
        <code>{"{getDayJSX_moreComplex()}"}</code>
        {getDayJSX_moreComplex()}

        <p>Exemple avec structures complexes + ternaire : </p>
        <code>{"{date.getDay() === 0 || date.getDay() === 6 ? WeekEnd : <WeekDay />}"}</code>
        {date.getDay() === 0 || date.getDay() === 6 ? WeekEnd : <WeekDay />}

        <h3>Si ... Alors ...</h3>

        <p>
          <code>{"{is_logged && <p>Coucou 1</p>}"}</code>
        </p>
        {is_logged && <p>Coucou 1</p>}

        <p>
          <code>{"{is_logged || <p>Coucou 2</p>}"}</code>
        </p>
        {is_logged || <p>Coucou 2</p>}

        <p>
          Si null ou undefined : <br />
          <code>{"{is_logged ?? <p>Impossible d'avoir le statut de connection</p>}"}</code>
        </p>
        {is_logged ?? <p>Impossible d'avoir le statut de connection</p>}
      </article>

      <article>
        <h2>Afficahge de listes</h2>

        <p>Pour afficher du JSX via une fonction, il faut que la fonction retourne du JSX.</p>
        <p>
          Pour les tableaux, la méthode "map()" qui permet de retourner quelque chose pour chaque élément du tableau.
        </p>
        <p>On peut donc faire de l'affichage de liste grâce à cette fonction : </p>
        <p>
          <code>{"{fruits.map((fr) => <li>{fr}</li> )}"}</code>
        </p>
        <ul>
          {fruits.map((fr) => (
            <li>{fr}</li>
          ))}
        </ul>

        <p>
          Ici on retourne un simple "li", mais on peut afficher quelque chose de plus complexe à l'aide d'une autre
          fonction, ou d'un composant.
        </p>

        <h3>Liste + conditionnel :</h3>
        <pre>{"{!fruits || fruits.length === 0 ? ("}</pre>
        <pre>{"          <p>La liste est vide.</p>"}</pre>
        <pre>{"        ) : ("}</pre>
        <pre>{"          <ul>"}</pre>
        <pre>{"            {fruits.map((f, index) => ("}</pre>
        <pre>{"              <li key={`tab2_${index}`}>{f}</li>"}</pre>
        <pre>{"            ))}"}</pre>
        <pre>{"          </ul>"}</pre>
        <pre>{"        )}"}</pre>
        {!fruits || fruits.length === 0 ? (
          <p>La liste est vide.</p>
        ) : (
          <ul>
            {fruits.map((f, index) => (
              <li key={`tab2_${index}`}>{f}</li>
            ))}
          </ul>
        )}
      </article>

      <article>
        <h2>Filtrer ou modifier ses données</h2>

        <p>Il ne faut pas hésiter à factoriser son code dans des fichiers / services à part pour le réutiliser.</p>
        <p>C'est valable aussi pour une simple amélioration de l'affichage des données : </p>
        <p>
          Appeler des fonctions sera plus propre et lisible que de faire les modifications dans le JSX. Ca évite
          également la réptition de code.
        </p>

        <pre>{'{roleFilter("ADMIN")}'}</pre>
        <p>Rôle : {roleFilter("ADMIN")}</p>
        <p>Rôle : {roleFilter("USER")}</p>
      </article>
    </>
  );
};

export default StaticData;
