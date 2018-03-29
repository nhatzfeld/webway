import React from "react";
import { Switch, Route } from "react-router-dom";

// routing is for changing urls/pages

import LoginPage from "./components/LoginPage/LoginPage.js";
import Main from "./components/Main/Main.js";

export default (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/main" component={Main} />
  </Switch>
);
