import React from "react";
import { connect } from "react-redux";
import "./Login";

const Login = props => {
  render() {
  return (
    <div className="Login">

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

// <redirect to='/home'

// rende this.state.redirect
//component mapstate to props 
//after creating user set your user to sessions in the controller
//put all your login information here not on app because 
export default connect()
