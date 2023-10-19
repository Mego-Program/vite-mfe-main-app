import "./App.css";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { dashboardRoutes } from 'dashboard/DashboardApp';

const content = [
  {
    title: "Add Project",
    text: `First, add a project that you
        would like to work on.`,
    value: "$22k",
  },
  {
    title: "Add Issue ",
    text: `Finally, add issues that you would like to work on.`,
    value: "$10k",
  },
  {
    title: "Total Projects ",
    text: `The project key is a unique identifier for a project.`,
    value: "15",
  },
  {
    title: "Ongoing  ",
    text: `You've probably heard of a project post-mortem.`,
    value: "03",
  },
];


export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <div>Main app - homepage</div>
      },
      {
        path: "/dashboard",
        children: dashboardRoutes
      },
      {
        path: "/sprints",
        children: dashboardRoutes // replace with sprintsRoutes
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={mainRoutes} />
  );
}

export default App;
