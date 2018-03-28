import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing.js";
import Login from "./components/Login/Login.js";
import Home from "./components/Home/Home.js";
import Header from "./components/Header/Header.js";
import Vault from "./components/Vault/Vault.js";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/header" component={Header} />
    <Route path="/vault" component={Vault} />
  </Switch>
);
