import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/userdashboard.css";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="dashboard-container">
      
      {/* Sidebar */}
      <div className={open ? "sidebar open" : "sidebar"}>
        <h2 className="logo">AgriApp</h2>

        <Link to="/user">🏠 Dashboard</Link>
        <Link to="/profile">👤 Profile</Link>
        <Link to="/settings">⚙ Settings</Link>
      </div>

      {/* Main area */}
      <div className="main-area">
        
        {/* Navbar */}
        <div className="navbar">
          <button onClick={() => setOpen(!open)}>☰</button>
          <h3>User Panel</h3>
        </div>

        {/* Page Content */}
        <div className="content">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;
