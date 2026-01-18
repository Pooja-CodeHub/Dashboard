import { useState } from "react";
import "../styles/settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="settings-container">
      <h2>Application Settings</h2>

      {/* Change Password */}
      <div className="settings-card">
        <h3>🔐 Change Password</h3>
        <input type="password" placeholder="Current Password" />
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm New Password" />
        <button>Update Password</button>
      </div>

      {/* Theme Settings */}
      <div className="settings-card">
        <h3>🎨 Theme Settings</h3>
        <div className="toggle">
          <span>Enable Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>

      {/* Notification Settings */}
      <div className="settings-card">
        <h3>🔔 Notification Settings</h3>
        <div className="toggle">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
      </div>

      {/* Application Preferences */}
      <div className="settings-card">
        <h3>⚙️ Application Preferences</h3>
        <select>
          <option>Default User Role: USER</option>
          <option>Default User Role: ADMIN</option>
        </select>
        <button>Save Preferences</button>
      </div>
    </div>
  );
};

export default Settings;

