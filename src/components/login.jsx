import React from "react";
import Joi from "joi-browser";
import MainForm from "./mainForm";

class Login extends MainForm {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().label("Username").required(),
    password: Joi.string().label("Password").required(),
  };

  onSubmitted() {
    console.log("Submitted");
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.inputField("username", "Username")}
          {this.inputField("password", "Password", "password")}
          {this.submitBtn("Login")}
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
