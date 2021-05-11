import { Redirect, Route } from "react-router";
import { LandingPage } from "../../pages";

const routeBuilder = [
  {
    path: "/home",
    exact: true,
    component: LandingPage,
    Router: Route,
  },
  {
    from: "/",
    to: "/home",
    Router: Redirect,
  },
];

export default routeBuilder;
