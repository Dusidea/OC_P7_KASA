import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import ErrorContent from "../components/ErrorContent.jsx";

function Error() {
  return (
    <div className="main_wrapper">
      <ErrorContent />
    </div>
  );
}

export default Error;
