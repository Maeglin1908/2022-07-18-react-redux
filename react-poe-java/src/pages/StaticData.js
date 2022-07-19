import WeekDay from "../components/WeekDay";

const StaticData = () => {
  const message = "Mon message";
  const jsx = <p>Mon message en jsx</p>;

  const date = new Date();
  let numDate = 6;
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
    if (weekend.includes(0)) {
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

        <code>{"{is_logged && <p>Coucou 1</p>}"}</code>
        {is_logged && <p>Coucou 1</p>}

        <code>{"{is_logged || <p>Coucou 2</p>}"}</code>
        {is_logged || <p>Coucou 2</p>}

        <code>{"{is_logged ?? <p>Coucou 3</p>}"}</code>
        {is_logged ?? <p>Coucou 3</p>}
      </article>
    </>
  );
};

export default StaticData;
