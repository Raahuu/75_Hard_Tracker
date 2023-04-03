import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";

const Portal = () => {
  return (
    <div className="h-full">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Portal;
