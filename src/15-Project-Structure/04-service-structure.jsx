async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export default function ServiceStructure() {
  const handleFetchUsers = async () => {
    try {
      const users = await getUsers();

      console.log(users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Service Structure</h1>

      <button onClick={handleFetchUsers}>Fetch Users</button>
    </div>
  );
}
