const StaticData = () => {
  const message = "Mon message";
  const jsx = <p>Mon message en jsx</p>;
  return (
    <>
      <h1>Données statics</h1>

      <article>
        <h2>Rappels</h2>

        <p>{message}</p>
        {jsx}
      </article>
    </>
  );
};

export default StaticData;
