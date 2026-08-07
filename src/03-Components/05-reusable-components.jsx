function Button() {
  return <button>Click Me</button>;
}

function ReusableComponents() {
  return (
    <div>
      <h1>Reusable Components</h1>

      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default ReusableComponents;
