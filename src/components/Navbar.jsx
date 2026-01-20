import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
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
    <div className="navbar">
      {/* Left side logo */}
      <div className="navbar-left" onClick={() => navigate("/overview")}>
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">AgriManagement</span>
      </div>

      {/* Right side profile */}
      <div className="navbar-right" ref={dropdownRef}>
        <div className="profile-icon" onClick={() => setOpen(!open)}>
          👤
        </div>

        {open && (
          <div className="profile-dropdown">
            <div onClick={() => navigate("/profile")}>My Profile</div>
            <div onClick={() => navigate("/settings")}>Account Settings</div>
            <div className="logout" onClick={logout}>
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
