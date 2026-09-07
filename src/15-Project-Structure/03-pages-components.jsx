function Navbar() {
  return (
    <nav>
      <h2>My App</h2>
    </nav>
  );
}

function HomePage() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Home Page</h1>
        <p>Welcome to the home page.</p>
      </main>
    </div>
  );
}

export default HomePage;
