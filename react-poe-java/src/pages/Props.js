import Product from "./../components/Product";

const Props = function () {
  const abricot = { name: "Abricot", prix: "4" };

  return (
    <>
      <h1>Les Props</h1>
      <article>
        <h2>Présentation</h2>

        <pre>From Props.js : {'const abricot = { name: "Abricot", prix: "4" };'}</pre>
        <pre>From Props.js : {"<Product prod={abricot} />"}</pre>
        <Product prod={abricot} />
      </article>
    </>
  );
};

export default Props;
