function Header() {
  return <h2>Welcome to React</h2>;
}

function NestedComponents() {
  return (
    <div>
      <Header />
      <p>This is a nested component example.</p>
    </div>
  );
}

export default NestedComponents;
