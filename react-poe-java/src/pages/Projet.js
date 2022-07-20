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
                        Créer un composant Header qui contiendra une image (ajoutée en CSS), et affiche le titre de
                        l'application
                    </li>
                    <li>Afficher dans Home le composant Header</li>
                    <li>
                        Créer un composant Card, qui affichera les informations d'un ***** déclaré en tant que constante
                        (sous forme d'objet ayant un titre, studio / réalisateur, description, image (à enregistrer dans
                        l'application), status (boolean))
                    </li>
                    <li>Afficher la carte dans Home (plusieurs fois)</li>
                    <li>
                        Ajouter un style différent dans vos cards, en fonction de si le jeu/série est terminé ou pas{" "}
                    </li>
                    <hr />
                    <li>Créer un composant Login (avec juste un titre, pas un vrai login</li>
                    <li>Installer le router, créer 2 routes : une pour Home, une pour Login</li>
                    <li>Créer un composant Navigation avec les liens</li>
                </ol>
            </article>

            <article>
                <h2>Partie 2 - Mardi</h2>
                <ol>
                    <li>Créer une classe Jeu (peut être ranger dans un dossier utils/models)</li>
                    <li>Utiliser cette classe pour créer une liste de jeux dans Home</li>
                    <li>
                        Créer des props dans le composant Card, et passer les données depuis Home vers Card (chaque
                        carte récupère 1 Jeu, ou les données d'un jeu)
                    </li>
                    <li>Afficher les cartes pour chaque jeu</li>
                    <hr />
                    <li>S'il n'y a pas de jeu, afficher un bandeau d'erreur (peut être un composant)</li>
                </ol>
            </article>

            <article>
                <h2>Partie 3 - Mercredi</h2>

                <ol>
                    <li>Créer un composant Formulaire permettant de créer un nouveau Jeu.</li>
                    <li>Utiliser le composant dans Home en tant que composant enfant, et pas en page.</li>
                    <li>
                        Empêcher la validation du formulaire si les champs du formulaire ne sont pas bons, et afficher
                        des messages d'erreur.
                    </li>
                    <li>
                        Faire en sorte que le nouveau jeu s'affiche dynamiquement / automatiquement dans la liste des
                        cartes après sa création.
                    </li>
                    <hr />
                    <li>Dans les cards, créer un bouton permettant de changer le statut du jeu.</li>
                    <li>Dans les cards, créer un bouton permettant de supprimer un jeu.</li>
                    <li>Dans Home, créer un bouton permettant de vider la liste des jeux.</li>
                </ol>
            </article>
        </div>
    );
};

export default Projet;
