function User({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

function ListComponent() {
  const users = [
    { id: 1, name: "Abdullah", age: 24 },
    { id: 2, name: "Ahmed", age: 22 },
    { id: 3, name: "Ali", age: 25 },
  ];

  return (
    <div>
      <h1>List with Component</h1>

      {users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default ListComponent;
