import React from "react";

const MovieId = ({ match, history }) => {
  return (
    <div>
      <div>{match.params.id}</div>
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
