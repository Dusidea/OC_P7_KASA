import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Error from "../pages/Error.jsx";
import Logement from "../pages/Logement.jsx";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
