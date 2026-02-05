import { NavLink } from "react-router-dom";
import "../styles/sideBar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Dashboard</h2>

      <ul className="menu">
        <li>
          <NavLink to="/overview">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
         <li>
          <NavLink to="/reports">Reports</NavLink>
        </li>
        {/* <li>
          <NavLink to="/categories">Categories</NavLink>
        </li> */}
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
       
        <li>
          <NavLink to="/notifications">Notifications</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </aside>
  );
}
