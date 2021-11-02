import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

export function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/">
					<Dashboard />
				</Route>
      </Switch>
    </Router>
  );
}
