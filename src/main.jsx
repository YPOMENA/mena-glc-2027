import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("The dashboard root element is missing.");
createRoot(rootElement).render(<App />);
