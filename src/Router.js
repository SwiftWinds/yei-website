import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./data/routes";

export default (<Switch>
            {routes.map(({
      path,
      Component,
      dropRoutes
    }) => {
      if (!dropRoutes) return <Route key={path} exact path={path}>
                    <Component />
                  </Route>;else {
        return dropRoutes.map(dropRoute => <Route key={path + dropRoute.path} exact path={path + dropRoute.path}>
                    <dropRoute.Component />
                  </Route>);
      }
    })}
            <Redirect to="/" />
          </Switch>);