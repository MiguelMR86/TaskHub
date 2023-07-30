import React from "react";
import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../components/Index";
import SpaceManager from "../components/TaskHub/SpaceManager";
import TaskManager from "../components/TaskHub/TaskManager";
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/manager",
    element: <SpaceManager />,
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
