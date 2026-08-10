function UserCard({ name }) {
  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {name}</p>
    </div>
  );
}

function BasicProps() {
  return (
    <div>
      <h1>Basic Props</h1>

      <UserCard name="Abdullah" />
      <UserCard name="Ali" />
    </div>
  );
}

export default BasicProps;
