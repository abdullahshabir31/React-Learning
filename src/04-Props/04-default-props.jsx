function Greeting({ name = "Guest" }) {
  return <h2>Hello, {name}!</h2>;
}

function DefaultProps() {
  return (
    <div>
      <h1>Default Props</h1>

      <Greeting name="Abdullah" />
      <Greeting />
    </div>
  );
}

export default DefaultProps;
