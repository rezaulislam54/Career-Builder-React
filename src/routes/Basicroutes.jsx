import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Homepage from "../pages/Homepage";
import JobDetails from "../components/JobDetails";
import Appliedjob from "../components/Appliedjob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("jobs.json"),
      },

      {
        path: "/applied",
        element: <Appliedjob></Appliedjob>,
      },

      {
        path: "/applied/job/:id",
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);

export default router