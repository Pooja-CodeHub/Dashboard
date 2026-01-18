import { useState } from "react";
import "../styles/profile.css";

const Profile = () => {
  const role = localStorage.getItem("role") || "USER";

  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("light");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    if (!password) {
      setMessage("Password cannot be empty");
      return;
    }

    setMessage("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      {/* Role */}
      <div className="profile-card">
        <label>Role</label>
        <input type="text" value={role} disabled />
      </div>

      {/* Change Password */}
      <div className="profile-card">
        <label>Change Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Theme Preference */}
      <div className="profile-card">
        <label>Theme Preference</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save Changes
      </button>

      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default Profile;
