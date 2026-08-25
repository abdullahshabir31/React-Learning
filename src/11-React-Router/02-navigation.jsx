import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page.</p>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <p>Here are our products.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact us here.</p>
    </div>
  );
}

function Navigation() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> <Link to="/products">Products</Link>{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
