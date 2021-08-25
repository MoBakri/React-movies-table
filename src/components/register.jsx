import React from "react";
import Joi from "joi-browser";
import MainForm from "./mainForm";

class Register extends MainForm {
  state = {
    data: { username: "", password: "", email: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().label("Username").required(),
    password: Joi.string().label("Password").min(5).required(),
    email: Joi.string().email().label("Email").required(),
  };

  onSubmitted() {
    console.log("Submitted");
  }

  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.inputField("username", "Username")}
          {this.inputField("password", "Password", "password")}
          {this.inputField("email", "Email", "email")}
          {this.submitBtn("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
