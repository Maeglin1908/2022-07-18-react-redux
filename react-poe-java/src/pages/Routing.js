const Routing = () => (
  <>
    <h1>Le Routage</h1>

    <article>
      <h2>Installation</h2>

      <p>React propose des Single Page Application, ce qui signifie qu'il n'y a qu'un fichier html : index.html .</p>
      <p>Le reste se base sur des composants Javascript.</p>
      <p>
        Par conséquent, on ne peut pas utiliser de liens classiques, avec les balises a, qui chercheraient à nous
        renvoyer vers un fichier .html ou .php
      </p>
      <p>
        L'un des intérêts des SPA c'est d'avoir des parties statiques, comme les barres de navigations, footer,
        header... et des parties dynamiques, un contenu qui se charge en fonction de la page demandée.
      </p>
      <p>
        C'est le routeur qui se charge de surveiller l'url du navigateur, de la modifier, et d'invoquer le composant
        attendu.
      </p>
      <p>
        Il n'y a pas de router par défaut dans React, il faut donc soit le faire soit même, soit utiliser une librairie
        :
      </p>
      <p>
        <code>npm install react-router-dom</code>
      </p>

      <h2>Déclarer les routes</h2>

      <p>(Voir App.js)</p>

      <p>Dans la version 6+, dans le fichier App.js : </p>
      <ul>
        <li>Balise parent " BrowserRouter " qui contient tout le JSX (sauf le div root)</li>
        <li>Dans app, à l'endroit où on souhaite afficher les composants :</li>
        <ul>
          <li>Routes, qui contient :</li>
          <li>Route : Les différentes routes, avec le chemin et le composant visé.</li>
        </ul>
      </ul>
    </article>

    <article>
      <h2>Les liens</h2>

      <p>
        Les liens se font avec une balise <b>NavLink</b>, un composant de React-Router-Dom, qui sont transformées en a.
      </p>
      <p>
        Le chemin se passe dans un attribut <b>to</b> et pas href.
      </p>
      <p>
        Une classe "active" est ajoutée automatiquement sur les balises lorsque le lien correspond à l'url en cours.
      </p>
    </article>
  </>
);

export default Routing;
