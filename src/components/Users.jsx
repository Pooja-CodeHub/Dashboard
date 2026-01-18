import { useState } from "react";
import "../styles/users.css";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Pooja Sonawane", email: "pooja@gmail.com", role: "USER", active: true },
    { id: 2, name: "Admin Sir", email: "admin@gmail.com", role: "ADMIN", active: true },
    { id: 3, name: "Rahul Patil", email: "rahul@gmail.com", role: "USER", active: false },
  ]);

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div className="users-page">
      <h2>Users Management</h2>

      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                {user.active ? (
                  <span className="active">Active</span>
                ) : (
                  <span className="inactive">Inactive</span>
                )}
              </td>

              <td>
                <button
                  className={user.active ? "deactivate-btn" : "activate-btn"}
                  onClick={() => toggleStatus(user.id)}
                >
                  {user.active ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
