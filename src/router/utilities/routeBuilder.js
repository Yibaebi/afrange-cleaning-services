import { Redirect, Route } from "react-router";
import {
  LandingPage,
  AboutUs,
  Services,
  Pricing,
  ContactUs,
} from "../../pages";

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
    path: "/pricing",
    exact: true,
    component: Pricing,
    Router: Route,
  },
  {
    path: "/contact-us",
    exact: true,
    component: ContactUs,
    Router: Route,
  },
  {
    from: "/",
    to: "/home",
    Router: Redirect,
  },
];

export default routeBuilder;
