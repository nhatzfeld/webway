import React from "react";
import { connect } from "react-redux";
import "./Login";

const Login = props => {
  constructor() {
    super()

    this.state =
    {
      redirect = '',
      usernameText: '',
      passwordText:'',
      t
    }
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

// <redirect to='/home'
</div>


// rende this.state.redirect
//component mapstate to props 
//after creating user set your user to sessions in the controller
//put all your login information here not on app because 
export default connect()
