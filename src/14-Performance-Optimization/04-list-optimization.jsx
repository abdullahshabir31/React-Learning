import { memo, useState } from "react";

const UserItem = memo(function UserItem({ user }) {
  console.log(`Rendering ${user.name}`);

  return (
    <li>
      {user.name} - {user.email}
    </li>
  );
});

function ListOptimization() {
  const [count, setCount] = useState(0);

  const users = [
    {
      id: 1,
      name: "Abdullah",
      email: "abdullah@example.com",
    },
    {
      id: 2,
      name: "Ahmed",
      email: "ahmed@example.com",
    },
    {
      id: 3,
      name: "Ali",
      email: "ali@example.com",
    },
  ];

  return (
    <div>
      <h1>List Optimization</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default ListOptimization;
