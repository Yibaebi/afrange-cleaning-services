import React from "react";
import { NavBar } from "../navbar/navbar";
import Router from "./../../router/index";

import "./app.css";

const Afrange = () => {
  return (
    <div className="aae-main-app--container">
      <header>
        <NavBar />
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
};

export default Afrange;
