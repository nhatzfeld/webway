import React from "react";
import { connect } from "react-redux";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameText: "",
      passwordText: ""
    };
  }

  // RENDER IS DESCRIBING OUR COMPONENT UI
  render() {
    return (
      <div className="Login">
        <input onChange={e => this.usernameHandler(e.target.value)} />
        <input onChange={e => this.passwordHandler(e.target.value)} />
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
      </div>
    );
  }
}
// <redirect to='/home'

// this.state.redirect
//after creating user set your user to sessions in the controller

const mapStateToProps = state => {
  return {
    usernameText,
    passwordText
  };
  // redirect
};

export default connect(mapStateToProps, { usernameText, passwordText })(Login);
