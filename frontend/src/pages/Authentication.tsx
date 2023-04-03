import React from "react";
import { Outlet } from "react-router-dom";
import ForgotPassword from "../components/Authentication/ForgotPassword";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Authentication = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Authentication;
