function Product({ name, price, category }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: Rs. {price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

function PropsDestructuring() {
  const product = {
    name: "Laptop",
    price: 85000,
    category: "Electronics",
  };

  return (
    <div>
      <h1>Props Destructuring</h1>

      <Product {...product} />
    </div>
  );
}

export default PropsDestructuring;
