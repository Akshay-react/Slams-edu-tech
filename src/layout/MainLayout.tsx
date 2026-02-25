import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Global Navbar */}
      <Navbar />

      {/* Page Content */}
      <Outlet />
    </div>
  );
};

export default MainLayout;