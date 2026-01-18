import "../styles/userdashboard.css";
const UserDashboard = () => {
  return (
    <div className="user-dashboard">

      <div className="user-navbar">
        User Dashboard
      </div>

      <div className="user-content">

        <div className="profile-card">
          <h3>Welcome User</h3>
          <p>Email: user@gmail.com</p>
          <p>Role: USER</p>
        </div>

        <div className="action-grid">
          <div className="action-card">My Profile</div>
          <div className="action-card">Settings</div>
          <div className="action-card">Logout</div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
