import { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
class MainForm extends Component {
  state = { data: {}, errors: {} };
  validate() {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, option);
    const errors = {};
    if (!result.error) return null;
    for (const item of result.error.details)
      errors[item.path[0]] = item.message;

    return errors;
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    this.onSubmitted();
  };
  validateProperty({ name, value }) {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  inputField(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        data={data[name]}
        handleChange={this.handleChange}
        name={name}
        label={label}
        errors={errors[name]}
        type={type}
      />
    );
  }
  submitBtn(label) {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }
}

export default MainForm;
