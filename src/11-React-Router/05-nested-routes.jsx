import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <Link to="profile">Profile</Link> <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}

function Profile() {
  return <p>Profile Page</p>;
}

function Settings() {
  return <p>Settings Page</p>;
}

function NestedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NestedRoutes;
