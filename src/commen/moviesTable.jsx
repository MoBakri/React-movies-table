import React, { Component } from "react";
import Like from "../components/Like";
import SortHeadingTable from "./SortHeadingTable";

class MoviesTable extends Component {
  onSortItem = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSortColumn(sortColumn);
  };
  render() {
    const column = [
      { label: "Title", path: "title" },
      { label: "Genre", path: "genre.name" },
      { label: "Stock", path: "numberInStock" },
      { label: "Rate", path: "dailyRentalRate" },
      { path: "like" },
      { path: "delete" },
    ];
    const { movies, onLike, deleteHandler } = this.props;
    return (
      <table className="table">
        <thead>
          <SortHeadingTable sortHeaderItems={column} onSort={this.onSortItem} />
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
  }
}

export default MoviesTable;
