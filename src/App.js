import React, { Component } from "react";
import routes from "./routes";
import Header from "./components/Header/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        {routes}
      </div>
    );
  }
}

export default App;
