import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ContextProvider } from "./context/Context.jsx";
import * as generalFunctions from "./controllers/firebase";
import * as firebaseFunctions from "./controllers/functions";

const provider = { ...generalFunctions, ...firebaseFunctions };

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
      <ContextProvider value={provider}>
        <App />
      </ContextProvider>
  </ThemeProvider>
);
