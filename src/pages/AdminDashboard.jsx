import "../styles/admindashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      
      {/* Top Navbar */}
      <div className="admin-navbar">
        <h2>Admin Dashboard</h2>
        <button>Logout</button>
      </div>

      {/* Dashboard Stats */}
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>120</p>
        </div>

        <div className="stat-card">
          <h3>Total Farmers</h3>
          <p>45</p>
        </div>

        <div className="stat-card">
          <h3>Total Queries</h3>
          <p>300</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="admin-table">
        <h3>Users List</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Pooja Sonawane</td>
              <td>USER</td>
              <td>pooja@gmail.com</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Uday Dange</td>
              <td>ADMIN</td>
              <td>uday@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminDashboard;
