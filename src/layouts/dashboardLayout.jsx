
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../styles/dashboardLayout.css";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Top Navbar */}
      <header className="top-navbar">
        <div className="nav-left">
          <h2 className="app-logo">User Management</h2>
        </div>

        <div className="nav-right" ref={dropdownRef}>
          <div className="profile-icon" onClick={() => setOpen(!open)}>
            👤
          </div>

          {open && (
            <div className="profile-dropdown">
              <div onClick={() => navigate("/profile")}>My Profile</div>
              <div onClick={() => navigate("/settings")}>
                Account Settings
              </div>
              <div className="logout" onClick={logout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="dashboard-body">
        {/* Sidebar */}
        <aside className="sidebar">
          <NavLink to="/overview">Overview</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/reports">Reports</NavLink>
          <NavLink to="/notifications">Notifications</NavLink>
          
          <NavLink to="/settings">Settings</NavLink>
        </aside>

        {/* Page Content */}
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
