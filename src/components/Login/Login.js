import React from "react";
import { connect } from "react-redux";
import "./Login";

const Login = props => {
  return (
    <div className="Login">

      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.userReducer
});

export default connect(mapStateToProps)(Login);
