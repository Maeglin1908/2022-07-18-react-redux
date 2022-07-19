const Product = ({ prod }) => {
  //{prod} will get directly the props.prod into it.

  return (
    <div className="card">
      <pre>
        From Product.js : {"<h3>{prod.name}</h3> (ou props.prod si on ne le déstructure pas dans le paramètre)"}
      </pre>
      <h3>{prod.name}</h3>

      <article>
        <h4>Desc du produit</h4>
        <pre>{"<p>Nom : {prod.name}</p>"}</pre>
        <p>Nom : {prod.name}</p>
        <pre>{"<p>Prix : {prod.prix} €</p>"}</pre>
        <p>Prix : {prod.prix} €</p>
      </article>
    </div>
  );
};

export default Product;
