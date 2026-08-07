function Card() {
  return <p>This is a Card Component.</p>;
}

function ComponentComposition() {
  return (
    <div>
      <h1>Component Composition</h1>

      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ComponentComposition;
