function Header() {
  return <h1>My Website</h1>;
}

function Footer() {
  return <p>© 2026 My Website</p>;
}

function MainContent() {
  return <p>Welcome to my React application.</p>;
}

export default function ComponentStructure() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
