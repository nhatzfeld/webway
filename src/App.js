import React, { Component } from "react";
import routes from "./routes";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import "./App.css";

// THINK OF APP JS AS ALWAYS ROUTING THROUGH IT, IT IS STATIC INFORMATION
// WHAT EVER WE PUT ON APP JS GOES EVERYWHERE
class App extends Component {
  render() {
    return (
      <div className="Front">
        <Header />
        <Sidebar />
        {routes}
      </div>
    );
  }
}

export default App;
