import React from "react";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import MainForm from "./mainForm";
import Joi from "joi-browser";
class NewTable extends MainForm {
  constructor() {
    super();
    this.state = {
      data: {
        title: "",
        genreId: "",
        numberInStock: "",
        dailyRentalRate: "",
      },
      genre: [],
      errors: {},
    };
  }

  // username = React.createRef();

  // componentDidMount(){
  //   this.username.current.value = "cool";
  // }
  // <input
  //   value={this.username.value}
  //   className="form-control"
  //   ref={this.username}
  // />

  componentDidMount() {
    const genre = getGenres();
    this.setState({ genre });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.viewData(movie) });
  }
  viewData(movie) {
    return {
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  schema = {
    id: Joi.string(),
    title: Joi.string().label("Title").required(),
    genreId: Joi.string().label("Genre").required(),
    numberInStock: Joi.number().min(0).less(100).label("Stock").required(),
    dailyRentalRate: Joi.number().min(0).max(10).label("Rate").required(),
  };

  onSubmitted() {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
    console.log("Submitted");
  }

  render() {
    return (
      <React.Fragment>
        <h1>ADD Section</h1>
        <form onSubmit={this.handleSubmit}>
          {this.inputField("title", "Title")}
          {this.selectField("genreId", "Genre", this.state.genre)}
          {this.inputField("numberInStock", "Stock")}
          {this.inputField("dailyRentalRate", "Rate")}
          {this.submitBtn("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default NewTable;
