function JSXExpressions() {
  const name = "Abdullah";
  const age = 24;

  return (
    <div>
      <h1>JSX Expressions</h1>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Next Year Age: {age + 1}</p>
    </div>
  );
}

export default JSXExpressions;
