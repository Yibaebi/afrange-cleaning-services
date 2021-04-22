import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Afrange from "./components/app/app";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Afrange />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
