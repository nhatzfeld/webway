import React, { Component } from "react";
import routes from "./routes";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./App.css";

// THINK OF APP JS AS ALWAYS ROUTING THROUGH IT, IT IS STATIC INFORMATION
// WHAT EVER WE PUT ON APP JS GOES EVERYWHERE
class App extends Component {
  constructor() {
    super();
    this.state = {
      passwordText: "",
      usernameText: "",
      redirect: null
      // userPlaceholder: "Username",
      // passPlaceholder: "Password"
    };
  }

  usernameHandler(val) {
    this.setState({ usernameText: val });
  }

  passwordHandler(val) {
    this.setState({ passwordText: val });
  }

  sendIt(username, password) {
    axios
      .put("/api/hereComesThePwTest", {
        username,
        password
      })
      .then(response => console.log(response));
  }
  createIt(username, password) {
    axios
      .put("/api/hereComesTheNewUser", {
        username,
        password
      })
      .then(response => console.log(response));
  }

  loginUser(username, password) {
    axios
      .put("/api/loginuser", {
        username: username,
        password: password
      })
      .then(response => {
        console.log(response);
        if (response.data.userid) {
          this.props.loadUserInfo(response);
          this.setState({ Redirect: <Redirect to="/home" /> });
        } else if (response.data === "BADPW") {
          alert(
            "That password appears to be incorrect. If you're unable to figure it out, reach out to chriswf for help."
          );
        } else if (response.data === "UnknownUser") {
          alert("This Username doesn't appear to be in our system.");
        }
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={e => this.usernameHandler(e.target.value)} />
        <input onChange={e => this.passwordHandler(e.target.value)} />
        {/* <placeholder userPlaceholder={this.state.userPlaceholder} />
        <placeholder passText={this.state.passPlaceholder} /> */}
        <button
          onClick={() =>
            this.sendIt(this.state.usernameText, this.state.passwordText)
          }
        >
          Sign In
        </button>
        <button
          onClick={() =>
            this.createIt(this.state.usernameText, this.state.passwordText)
          }
        >
          Register{" "}
        </button>
        {Routes}
      </div>
    );
  }
}

export default App;
