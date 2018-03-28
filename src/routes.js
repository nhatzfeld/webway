import React from "react";
import { Switch, Route } from "react-router-dom";

// routing is for changing urls/pages

import Landing from "./components/Landing/Landing.js";
import Main from "./components/Main/Main.js";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/main" component={Main} />
  </Switch>
);
