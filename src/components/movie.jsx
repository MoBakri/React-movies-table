import React, { Component } from "react";
import Pagination from "../commen/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "../commen/moviesTable";
import { Paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import Listgroup from "../commen/listGroup";
import _ from "lodash";
import { SearchField } from "./../commen/serachField";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    data: { name: "" },
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ name: "All Genre" }, ...getGenres()],
    });
  }
  deleteHandler = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  onSelectNum = (pageNum) => {
    this.setState({ currentPage: pageNum });
  };
  onGenres = (genre) => {
    this.setState({
      selectedItem: genre,
      currentPage: 1,
    });
  };
  onSortColumn = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleSearch = ({ currentTarget }) => {
    const data = this.state.data;
    data.name = currentTarget.value.trimStart();
    this.setState({
      data,
      currentPage: 1,
      selectedItem: "All Gernre" && undefined,
    });
  };
  onLike = (liked) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(liked);
    movies[index] = { ...liked };
    movies[index].like = !liked.like;
    this.setState({ movies });
  };
  render() {
    const stl = { backgroundColor: "gray", color: "white" };
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      data,
      selectedItem,
      sortColumn,
    } = this.state;

    const filterd =
      selectedItem && selectedItem._id
        ? allMovies.filter((m) => m.genre._id === selectedItem._id)
        : allMovies;

    const filterSearch =
      data.name === ""
        ? filterd
        : allMovies.filter((m) => !m.title.toLowerCase().search(data.name));

    const sorted = _.orderBy(
      filterSearch,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = Paginate(sorted, currentPage, pageSize);
    const { length: count } = filterSearch;
    return (
      <div className="container">
        <p>
          Currently Showing{" "}
          <span className="badge badge-pill " style={stl}>
            {filterSearch.length}
          </span>{" "}
          Movies in the Database
        </p>

        <div className="row">
          <div className="col-sm-3">
            <Listgroup
              genres={this.state.genres}
              onGenres={this.onGenres}
              genreSelected={this.state.selectedItem}
              data={data}
            />
          </div>
          <div className="col-sm">
            <Link to="./movies/new" className="btn btn-primary my-2">
              add movie
            </Link>

            <SearchField data={data} handleSearch={this.handleSearch} />

            <MoviesTable
              movies={movies}
              onLike={this.onLike}
              sortColumn={sortColumn}
              deleteHandler={this.deleteHandler}
              onSortColumn={this.onSortColumn}
              count={count}
            />
            <Pagination
              pageNum={this.state.pageSize}
              pageItemCount={filterSearch.length}
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
