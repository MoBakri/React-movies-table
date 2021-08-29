import React from "react";

const SelectField = ({ name, label, data, option, errors, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={data[name]}
        onChange={handleChange}
        className="form-control"
      >
        <option value="">...</option>
        {option.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>

      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default SelectField;
