function LogicalAndOperator() {
  const isAdmin = true;

  return (
    <div>
      <h1>Logical AND Operator</h1>

      <p>User Dashboard</p>

      {isAdmin && <p>Admin controls are available.</p>}
    </div>
  );
}

export default LogicalAndOperator;
