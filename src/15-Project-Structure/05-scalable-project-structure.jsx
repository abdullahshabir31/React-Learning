function Header() {
  return (
    <header>
      <h1>Employee Management System</h1>
    </header>
  );
}

function Sidebar() {
  return (
    <aside>
      <p>Dashboard</p>
      <p>Employees</p>
      <p>Departments</p>
      <p>Projects</p>
    </aside>
  );
}

function Dashboard() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Welcome to the Employee Management System.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Employee Management System</p>
    </footer>
  );
}

export default function ScalableProjectStructure() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
}
