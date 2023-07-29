import React from "react";
import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../components/Index";
import TaskManager from "../components/TaskManager/TaskManager";
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/manager",
    element: <TaskManager />,
  },
  {
    path: "/manager/space/:id",
    element: <TaskManager />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
