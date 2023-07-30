import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/General/Others/Loading";
const Index = lazy(() => import("../pages/Index"));
const TaskManager = lazy(() => import("../pages/TaskManager"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Index />
      </Suspense>
    )
  },
  {
    path: "/manager",
    element: (
      <Suspense fallback={<Loading />}>
        <TaskManager />
      </Suspense>
    )
  },
  {
    path: "/manager/space/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <TaskManager />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
