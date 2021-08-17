import React from "react";
import Like from "../components/Like";
const MoviesTable = (props) => {
  const { movies, onLike, deleteHandler } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>Like</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like like={movie} liked={onLike} />
            </td>
            <td>
              <button
                onClick={() => deleteHandler(movie)}
                className="btn btn-danger btn-sm"
              >
                x
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
