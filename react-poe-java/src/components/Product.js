import PropTypes from "prop-types";
import "./../styles/Product.css";
export const Product = ({ id, prod, currency = "€" }) => {
  //{prod} will get directly the props.prod into it.

  return (
    <div className="card">
      <pre>From Product.js : {'const Product = ({ prod, currency = "€" })'}</pre>
      <pre>
        From Product.js : {"<h3>{prod.name}</h3> (ou props.prod si on ne le déstructure pas dans le paramètre)"}
      </pre>
      <h3>{prod.name}</h3>

      <article>
        <h4>Desc du produit</h4>
        <pre>{"<p>Nom : {prod.name}</p>"}</pre>
        <pre>{"<p>Prix : {prod.prix} {currency}</p>"}</pre>
        <p>Nom : {prod.name}</p>
        <p>
          Prix : {prod.prix} {currency}
        </p>
      </article>
    </div>
  );
};

export const ProductTyped = ({ id, prod, currency = "€" }) => {
  //{prod} will get directly the props.prod into it.

  return (
    <div className="card">
      <h3>{prod.name}</h3>

      <article>
        <h4>Desc du produit</h4>
        <p>Nom : {prod.name}</p>
        <p>
          Prix : {prod.prix} {currency}
        </p>
      </article>
    </div>
  );
};

ProductTyped.propTypes = {
  id: PropTypes.string.isRequired,
  prod: PropTypes.object.isRequired,
  currency: PropTypes.oneOf(["€", "$", "CHF", "£"]),
  same_as: PropTypes.arrayOf(PropTypes.string),
};
