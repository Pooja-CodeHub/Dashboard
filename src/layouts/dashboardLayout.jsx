import Sidebar from "../components/sideBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}
