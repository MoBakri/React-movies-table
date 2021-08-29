import React from "react";

export const SearchField = ({ data, handleSearch }) => {
  return (
    <div className="mb-2">
      <input
        className="form-control"
        type="text"
        name={data["name"]}
        value={data.name}
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearch}
      />
    </div>
  );
};
