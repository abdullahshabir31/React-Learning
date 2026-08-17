function RenderList() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div>
      <h1>Render List</h1>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderList;
