import React, { Component } from "react";
import Like from "../components/Like";
import SortHeadingTable from "./SortHeadingTable";
import TableBody from "./tableBody";

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
      {
        key: "like",
        content: (movie) => <Like like={movie} liked={this.props.onLike} />,
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => this.props.deleteHandler(movie)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        ),
      },
    ];
    const { movies, sortColumn } = this.props;
    return (
      <table className="table">
        <thead>
          <SortHeadingTable
            sortHeaderItems={column}
            sortColumn={sortColumn}
            onSort={this.onSortItem}
          />
        </thead>
        <TableBody data={movies} column={column} />
        {/* <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like like={movie} liked={this.props.onLike} />
              </td>
              <td>
               <button
                onClick={() => this.props.deleteHandler(movie)}
                className="btn btn-danger btn-sm"
                >
            x
          </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    );
  }
}

export default MoviesTable;
