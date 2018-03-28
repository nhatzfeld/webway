import React, { Component } from "react";
import { connect } from "react-redux";
import "./Landing.css";

import { getUser } from "../../reducers/userReducer";

class Landing extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="landing">
        <div>{this.props.user.user_name}</div>
        <div className="landing__background">
          <div className="Login__form">
            {!this.props.user.user_name ? (
              <a href={process.env.REACT_APP_LOGIN}>
                <button> LOGIN </button>
              </a>
            ) : (
              <a href={process.env.REACT_APP_LOGOUT}>
                <button> LOGOUT </button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state.userReducer;

export default connect(mapStateToProps, { getUser })(Landing);
