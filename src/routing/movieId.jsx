import React from "react";

const MovieId = ({ match, history }) => {
  return (
    <div>
      <h1> id : {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieId;
