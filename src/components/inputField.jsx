import React from "react";

const inputField = (props) => {
  const { value, handleChange, name, label, errors, type } = props;
  return (
    <div className="from-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        onChange={handleChange}
        name={name}
        value={value}
        className="form-control"
      />

      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default inputField;
