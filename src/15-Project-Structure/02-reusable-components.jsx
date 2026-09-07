function Button({ text }) {
  return <button>{text}</button>;
}

export default function ReusableComponents() {
  return (
    <div>
      <h1>Reusable Components</h1>

      <Button text="Login" />
      <Button text="Register" />
      <Button text="Contact" />
    </div>
  );
}
