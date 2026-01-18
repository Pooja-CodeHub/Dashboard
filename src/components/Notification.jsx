import "../styles/notification.css";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Product Created",
      message: "Product 'Wheat Seeds' was added to inventory",
      time: "2 minutes ago",
      type: "product",
    },
    {
      id: 2,
      title: "New User Registered",
      message: "User 'Rahul Patil' has created an account",
      time: "10 minutes ago",
      type: "user",
    },
    {
      id: 3,
      title: "New Product Created",
      message: "Product 'Organic Fertilizer' was added to inventory",
      time: "1 hour ago",
      type: "product",
    },
  ];

  return (
    <div className="notifications-container">
      <h2>System Notifications</h2>

      {notifications.map((n) => (
        <div key={n.id} className={`notification-card ${n.type}`}>
          <div className="notification-header">
            <h4>{n.title}</h4>
            <span>{n.time}</span>
          </div>
          <p>{n.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
