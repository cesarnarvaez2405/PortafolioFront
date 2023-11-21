import React from "react";
import ReactDOM from "react-dom/client";
import { PortafolioApp } from "./portafolioApp";
import "./style.css";
import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortafolioApp />
  </React.StrictMode>
);
