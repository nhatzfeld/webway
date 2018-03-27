import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import About from "./components/About/About.js";
import Header from "./components/Header/Header.js";
import Vault from "./components/Vault/Vault.js";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/header" component={Header} />
    <Route path="/vault" component={Vault} />
  </Switch>
);
