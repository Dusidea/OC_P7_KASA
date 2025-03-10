import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Routing from "./routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routing />
  </StrictMode>
);
