import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>

      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Page</h2>

      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
}

function UseNavigateExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default UseNavigateExample;
