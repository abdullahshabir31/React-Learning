function KeyProp() {
  const products = [
    { id: 101, name: "Laptop", price: 100000 },
    { id: 102, name: "Phone", price: 50000 },
    { id: 103, name: "Headphones", price: 10000 },
  ];

  return (
    <div>
      <h1>Key Prop</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: Rs. {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default KeyProp;
