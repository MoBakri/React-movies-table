import React from "react";

const inputField = (props) => {
  const { data, handleChange, name, label, errors, type } = props;
  return (
    <div className="from-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        onChange={handleChange}
        name={name}
        value={data.username}
        className="form-control"
      />

      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default inputField;
