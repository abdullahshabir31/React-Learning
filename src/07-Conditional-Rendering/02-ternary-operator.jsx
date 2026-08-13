function TernaryOperator() {
  const isLoggedIn = false;

  return (
    <div>
      <h1>Ternary Operator</h1>

      <p>{isLoggedIn ? "Welcome Back!" : "Please Login"}</p>
    </div>
  );
}

export default TernaryOperator;
