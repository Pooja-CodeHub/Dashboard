import "../styles/overview.css";

const Overview = () => {
  const stats = [
    { title: "Total Products", value: 1240 },
    { title: "Low Stock Items", value: 46 },
    { title: "Out of Stock", value: 32 },
    { title: "Active Categories", value: 12 },
  ];

  const activities = [
    "New product 'Classmate Notebook' added",
    "Stock updated for 'Cello Gel Pen'",
    "Sub-category 'Gel Pens' created",
    "Product 'Camlin Geometry Box' marked low stock",
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
            <div className="bar in-stock">In Stock 75%</div>
            <div className="bar low-stock">Low Stock 15%</div>
            <div className="bar out-stock">Out 10%</div>
          </div>
        </div>

        <div className="chart-card">
          <h4>Monthly Product Additions</h4>
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
