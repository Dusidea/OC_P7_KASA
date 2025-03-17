import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Router.jsx";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="headerMainWrapper">
        <Header />

        <Routing />
      </div>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);
