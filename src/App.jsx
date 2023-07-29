import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./components/Index/IndexPage";
import TaskManager from "./components/TaskManager/TaskManager";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/manager" element={<TaskManager />} />
      <Route path="/manager/space/:id" element={<TaskManager />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
