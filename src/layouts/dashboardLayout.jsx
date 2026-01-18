// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/sideBar";
// import Navbar from "../components/Navbar";
// import "../styles/dashboardLayout.css";

// const DashboardLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <Sidebar />

//       <div className="dashboard-content">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default DashboardLayout;
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "../styles/dashboardLayout.css";

const DashboardLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Top Navbar */}
      <header className="top-navbar">
        <div className="nav-left">
          <h2 className="app-logo">User Management</h2>
        </div>

        <div className="nav-right">
          <div className="profile-icon" onClick={() => navigate("/profile")}>
            👤
          </div>
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
          <NavLink to="/profile">Profile</NavLink>
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
