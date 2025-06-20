import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollTo from "./components/ScrollTo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollTo />
      <App />
    </BrowserRouter>
  </StrictMode>
);
