import { Redirect, Route } from "react-router";
import { LandingPage, AboutUs, Services } from "../../pages";

const routeBuilder = [
  {
    path: "/home",
    exact: true,
    component: LandingPage,
    Router: Route,
  },
  {
    path: "/about",
    exact: true,
    component: AboutUs,
    Router: Route,
  },
  {
    path: "/services",
    exact: true,
    component: Services,
    Router: Route,
  },
  {
    from: "/",
    to: "/home",
    Router: Redirect,
  },
];

export default routeBuilder;
