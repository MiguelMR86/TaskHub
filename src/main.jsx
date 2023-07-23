import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ContextProvider } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ThemeProvider>
);
