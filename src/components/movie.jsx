import React, { Component } from "react";
import Pagination from "../commen/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "../commen/moviesTable";
import { Paginate } from "../utils/paginate";
import Listgroup from "../commen/listGroup";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ name: "All Genre" }, ...getGenres()],
    });
  }
  onLike = (liked) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(liked);
    movies[index] = { ...liked };
    movies[index].like = !liked.like;
    this.setState({ movies });
  };
  deleteHandler = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  onSelectNum = (pageNum) => {
    this.setState({ currentPage: pageNum });
  };
  onGenres = (genre) => {
    this.setState({ selectedItem: genre, currentPage: 1 });
  };
  onSortColumn = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };
  render() {
    const stl = { backgroundColor: "gray", color: "white" };
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      selectedItem,
      sortColumn,
    } = this.state;

    const filterd =
      selectedItem && selectedItem._id
        ? allMovies.filter((m) => m.genre._id === selectedItem._id)
        : allMovies;

    const sorted = _.orderBy(filterd, [sortColumn.path], [sortColumn.order]);

    const movies = Paginate(sorted, currentPage, pageSize);

    const { length: count } = movies;

    if (count === 0) return <p>Current there is no movies</p>;
    return (
      <div className="container">
        <p>
          Currently Showing{" "}
          <span className="badge badge-pill " style={stl}>
            {filterd.length}
          </span>{" "}
          Movies in the Database
        </p>

        <div className="row">
          <div className="col-sm-3">
            <Listgroup
              genres={this.state.genres}
              onGenres={this.onGenres}
              genreSelected={this.state.selectedItem}
            />
          </div>
          <div className="col-sm">
            <MoviesTable
              movies={movies}
              onLike={this.onLike}
              deleteHandler={this.deleteHandler}
              onSortColumn={this.onSortColumn}
            />
            <Pagination
              pageNum={this.state.pageSize}
              pageItemCount={filterd.length}
              currentPage={this.state.currentPage}
              onSelectNum={this.onSelectNum}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
