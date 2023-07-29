import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/General/Others/Loading";
const IndexPage = lazy(() => import("./components/Index/IndexPage"));
const TaskManager = lazy(() => import("./components/TaskManager/TaskManager"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/manager" element={<TaskManager />} />
      <Route path="/manager/space/:id" element={
        <Suspense fallback={<Loading/>}>
          <TaskManager />
        </Suspense>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
