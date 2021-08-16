import React, { Component } from "react";
import Pagination from "../commen/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./Like";
import { Paginate } from "../utils/paginate";
import Listgroup from "../commen/listGroup";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres(),
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
    this.setState({ selectedItem: genre });
  };

  render() {
    const stl = { backgroundColor: "gray", color: "white" };
    const allMovie = Paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );
    const filterd = this.state.selectedItem
      ? allMovie.filter((m) => m.genre.id === this.state.selectedItem.id)
      : allMovie;
    const { length: count } = this.state.movies;
    if (count === 0) return <p>Current there is no movies</p>;
    return (
      <React.Fragment>
        <div className="container">
          <p>
            Currently Showing{" "}
            <span className="badge badge-pill " style={stl}>
              {count}
            </span>{" "}
            Movies in the Database
          </p>
          <div className="row">
            <div className="col-sm-4">
              <Listgroup
                genres={this.state.genres}
                onGenres={this.onGenres}
                genreItem={this.state.selectedItem}
              />
            </div>
            <div className="col-sm-8">
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
                  {filterd.map((movie) => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like like={movie} liked={this.onLike} />
                      </td>
                      <td>
                        <button
                          onClick={() => this.deleteHandler(movie)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                pageNum={this.state.pageSize}
                pageItemCount={filterd.length}
                currentPage={this.state.currentPage}
                onSelectNum={this.onSelectNum}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
