import "../styles/overview.css";

const Overview = () => {
  const stats = [
    { title: "Total Products", value: 1240 },
    { title: "Out of Stock", value: 32 },
    { title: "Products Added Today", value: 18 },
    { title: "Active Categories", value: 12 },
  ];

  const activities = [
    "New product 'Wheat Seeds' added",
    "Product 'Organic Fertilizer' updated",
    "Category 'Pesticides' created",
    "New user 'Admin' logged in",
  ];

  return (
    <div className="overview-container">
      <h2>Dashboard Overview</h2>

      {/* Top Stats */}
      <div className="stats-grid">
        {stats.map((s, index) => (
          <div key={index} className="stat-card">
            <h4>{s.title}</h4>
            <p>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card">
          <h4>Stock Status</h4>
          <div className="fake-chart">
            <div className="bar in-stock">In Stock 85%</div>
            <div className="bar out-stock">Out 15%</div>
          </div>
        </div>

        <div className="chart-card">
          <h4>Product Growth</h4>
          <div className="fake-chart">
            <div className="line-chart">
              Jan ▄ Feb ▆ Mar ▇ Apr ▆ May ▇ Jun ▇
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity-section">
        <h4>Recent Activity</h4>
        <ul>
          {activities.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
