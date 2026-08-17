function FilterAndRender() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "T-Shirt", category: "Clothing" },
    { id: 3, name: "Phone", category: "Electronics" },
    { id: 4, name: "Shoes", category: "Clothing" },
  ];

  const electronics = products.filter(
    (product) => product.category === "Electronics",
  );

  return (
    <div>
      <h1>Filter and Render</h1>

      {electronics.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default FilterAndRender;
