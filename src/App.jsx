import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./layouts/authLayout";
import DashboardLayout from "./layouts/dashboardLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Overview from "./components/Overview";
import Users from "./components/Users";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Dashboard routes */}
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
