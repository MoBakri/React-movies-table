import React, { Component } from "react";
import SortHeadingTable from "./SortHeadingTable";
import TableBody from "./tableBody";
import Like from "../components/Like";
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
      </table>
    );
  }
}

export default MoviesTable;
