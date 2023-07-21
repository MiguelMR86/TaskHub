import React from "react";
import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../components/Index/IndexPage";
import TaskManager from "../components/TaskManager/TaskManager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/manager/space/:id",
    element: <TaskManager />,
  },
  {
    path: "/manager",
    element: <TaskManager />,
  },
  {
    path: "*",
    element: (
      <div className="w-full h-screen grid place-items-center">
        <h1 className="text-red-500 text-3xl scale-125">404</h1>
      </div>
    ),
  },
]);

export default router;
