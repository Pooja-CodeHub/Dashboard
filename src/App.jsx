import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import DashboardLayout from "./layouts/dashboardLayout";
import SideBar from "./components/sideBar";

import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      { <Route path="/register" element={<Register />} /> }
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/dashboardLayout" element={<DashboardLayout />} />
      <Route path="/sideBar" element={<SideBar />} />

    </Routes>
  );
}

export default App;
