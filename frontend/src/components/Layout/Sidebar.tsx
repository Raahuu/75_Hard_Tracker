import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-600 w-56 text-white h-full">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/track-progress">Track Progress</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/challenge-settings">Challenge Settings</Link>
      <Link to="/account-settings">Account Settings</Link>
    </div>
  );
};

export default Sidebar;
