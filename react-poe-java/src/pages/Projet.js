const Projet = () => {
  return (
    <div id="projet">
      <h1>Projet</h1>

      <article>
        <h2>Partie 1 - Lundi</h2>
        <ol>
          <li>Créer une nouvelle application React</li>
          <li>Créer un composant Home avec un simple paragraphe, et afficher ce composant</li>
          <li>
            Créer un composant Header qui contiendra une image (ajoutée en CSS), et affiche le titre de l'application
          </li>
          <li>Afficher dans Home le composant Header</li>
          <li>
            Créer un composant Card, qui affichera les informations d'un ***** déclaré en tant que constante (sous forme
            d'objet ayant un titre, studio / réalisateur, description, image (à enregistrer dans l'application), status
            (boolean))
          </li>
          <li>Afficher la carte dans Home (plusieurs fois)</li>
          <li>Ajouter un style différent dans vos cards, en fonction de si le jeu/série est terminé ou pas </li>
          <hr />
          <li>Créer un composant Login (avec juste un titre, pas un vrai login</li>
          <li>Installer le router, créer 2 routes : une pour Home, une pour Login</li>
          <li>Créer un composant Navigation avec les liens</li>
        </ol>
      </article>
    </div>
  );
};

export default Projet;
