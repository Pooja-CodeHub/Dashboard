import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {/* Left side logo */}
      <div className="navbar-left" onClick={() => navigate("/overview")}>
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">User Management</span>
      </div>

      {/* Right side profile */}
      <div className="navbar-right" onClick={() => navigate("/profile")}>
        <i className="fas fa-user-circle profile-icon"></i>
      </div>
    </div>
  );
};

export default Navbar;
