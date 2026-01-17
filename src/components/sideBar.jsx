import { NavLink, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Agri Panel</h2>
      </div>

      <div className="sidebar-menu">
        <NavLink to="/user" end className="menu-link">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/user/profile" className="menu-link">
          👤 Profile
        </NavLink>

        <NavLink to="/user/settings" className="menu-link">
          ⚙️ Settings
        </NavLink>
      </div>

      <button className="logout-btn" onClick={logout}>
        🚪 Logout
      </button>
    </div>
  );
};

export default Sidebar;
