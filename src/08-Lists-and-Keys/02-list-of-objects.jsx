function ListOfObjects() {
  const users = [
    { id: 1, name: "Abdullah", age: 24 },
    { id: 2, name: "Ahmed", age: 22 },
    { id: 3, name: "Ali", age: 25 },
  ];

  return (
    <div>
      <h1>List of Objects</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default ListOfObjects;
