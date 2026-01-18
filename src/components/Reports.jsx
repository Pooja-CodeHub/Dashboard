import "../styles/reports.css";

const Reports = () => {
  return (
    <div className="reports-container">
      <h2 className="reports-title">Reports & Analytics</h2>

      {/* Top Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Monthly Users</h3>
          <p>1,240</p>
        </div>

        <div className="stat-card">
          <h3>Yearly Growth</h3>
          <p>+32%</p>
        </div>

        <div className="stat-card">
          <h3>Active Users</h3>
          <p>860</p>
        </div>

        <div className="stat-card">
          <h3>Inactive Users</h3>
          <p>120</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        {/* Monthly Trend */}
        <div className="chart-card">
          <div className="chart-title">Monthly Performance Trend</div>

          <div className="bar-chart">
            <div className="bar" style={{ height: "80px" }}></div>
            <div className="bar" style={{ height: "120px" }}></div>
            <div className="bar" style={{ height: "100px" }}></div>
            <div className="bar" style={{ height: "160px" }}></div>
            <div className="bar" style={{ height: "140px" }}></div>
            <div className="bar" style={{ height: "180px" }}></div>
          </div>
        </div>

        {/* Status */}
        <div className="chart-card status-box">
          <div className="chart-title">Status Based Users</div>
          <p className="active">Active 78%</p>
          <p className="inactive">Inactive 22%</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
