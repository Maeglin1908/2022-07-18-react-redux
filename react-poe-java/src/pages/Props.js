import { ProductTyped } from "./../components/Product";

const Props = function () {
  const abricot = { name: "Abricot", prix: "4" };
  const fraise = { name: "Fraises", prix: "6" };
  const framboise = { name: "Framboises", prix: "7" };
  const safran = { name: "Safran", prix: "130" };
  return (
    <>
      <h1>Les Props</h1>
      <article>
        <h2>Présentation</h2>

        <pre>From Props.js : {'const abricot = { name: "Abricot", prix: "4" };'}</pre>
        <pre>From Props.js : {"<Product prod={abricot} />"}</pre>
        <div className="cards">
          <ProductTyped id="1" prod={abricot} />
          <ProductTyped id="2" prod={fraise} currency="$" />
          <ProductTyped id="3" prod={framboise} />
          <ProductTyped prod={safran} />
        </div>
      </article>
    </>
  );
};

export default Props;
