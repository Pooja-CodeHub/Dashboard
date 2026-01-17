import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/dashboardLayout";

import Overview from "./components/Overview";
import Users from "./components/Users";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="overview" />} />
        <Route path="overview" element={<Overview />} />
        <Route path="users" element={<Users />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
