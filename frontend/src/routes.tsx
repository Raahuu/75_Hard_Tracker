import { createBrowserRouter } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Onboarding from "./pages/Onboarding";
import Portal from "./pages/Portal";

import AccountSettings from "./components/AccountSettings";
import ChallengeSettings from "./components/ChallengeSettings";
import TrackProgress from "./components/TrackProgress";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Gallery from "./components/Gallery";
import Dashboard from "./components/Dashboard";
import Measurements from "./components/Onboarding/Measurements";
import BMI from "./components/Onboarding/BMI";
import Diet from "./components/Onboarding/Diet";

const routes = createBrowserRouter([
  {
    path: "/auth",
    element: <Authentication />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Signup />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
    children: [
      {
        path: "/onboarding/bmi",
        element: <BMI />,
      },
      {
        path: "/onboarding/measurements",
        element: <Measurements />,
      },
      {
        path: "/onboarding/diet",
        element: <Diet />,
      },
    ],
  },
  {
    path: "/",
    element: <Portal />,
    children: [
      {
        path: "/challenge-settings",
        element: <ChallengeSettings />,
      },
      {
        path: "/account-settings",
        element: <AccountSettings />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/track-progress",
        element: <TrackProgress />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
