import React, { Component } from "react";
import SortHeadingTable from "./SortHeadingTable";
import TableBody from "./tableBody";
import Like from "../components/Like";
import { Link } from "react-router-dom";

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
      {
        label: "Title",
        path: "title",
        content: (movie) => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        ),
      },
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
    const { movies, sortColumn, count } = this.props;
    return (
      <table className="table">
        <thead>
          <SortHeadingTable
            sortHeaderItems={column}
            sortColumn={sortColumn}
            onSort={this.onSortItem}
          />
        </thead>
        <TableBody data={movies} column={column} count={count} />
      </table>
    );
  }
}

export default MoviesTable;
