import React from "react";
import { Route, Switch } from "react-router";

import routeBuilder from "./utilities/routeBuilder";
import ScrollToTop from "./utilities/scrollToTop";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {routeBuilder.map((route, index) => {
          const { component: Component, path, exact, Router, ...rest } = route;
          return (
            <Router
              path={path}
              exact={exact}
              {...rest}
              render={(props) => <Component {...rest} {...props} />}
              key={`router-${index}`}
            />
          );
        })}
      </Switch>
    </>
  );
};

export default AppRouter;
