import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./layouts/authLayout";
import DashboardLayout from "./layouts/dashboardLayout";
import Overview from "./components/Overview";
import Products from "./components/products";
import Categories from "./components/Categories";
import Notifications from "./components/Notification";
import Profile from "./components/Profile";

import Users from "./components/Users";
import Reports from "./components/Reports";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
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
        <Route path="products" element={<Products />} />
        {/* <Route path="categories" element={<Categories />} /> */}
        <Route path="reports" element={<Reports />} />
        <Route path="users" element={<Users />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="navbar" element={<Navbar />} />
      </Route>
    </Routes>
  );
}

export default App;
