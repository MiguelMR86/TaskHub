import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ContextProvider } from "./context/Context.jsx";
import {
  createSpace, getUserSpaces, getUserSpaceByName,
  createTask, getUserTasks, getUserTask, deleteTask, updateTaskName, updateTaskDescription, updateTaskDueDate, updateTaskPriority, updateTaskStatus, updateTaskSubtasks,
  signInWithGoogle, signOut, getUser
} from "./controllers/firebase";
import { 
  handelStatusColor, handelPriorityColor, handelPriorityFlag, handelDates, handelInputDateInsert
 } from "./controllers/functions";

const firebaseProvider = {
  createSpace, getUserSpaces,  getUserSpaceByName,
  createTask, getUserTasks, getUserTask, deleteTask, updateTaskName, updateTaskDescription, updateTaskDueDate, updateTaskPriority, updateTaskStatus, updateTaskSubtasks,
  signInWithGoogle, signOut, getUser,
  handelStatusColor, handelPriorityColor, handelPriorityFlag, handelDates, handelInputDateInsert
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
      <ContextProvider value={firebaseProvider}>
        <App />
      </ContextProvider>
  </ThemeProvider>
);
