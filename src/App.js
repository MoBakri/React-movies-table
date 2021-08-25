import React from "react";
import NavBar from "./navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movie";
import Customer from "./routing/customer";
import Market from "./routing/market";
import Notfound from "./routing/not-found";
import MovieId from "./routing/movieId";
import Login from "./components/login";
import Register from "./components/register";
const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route
            path="/movies/:id"
            render={(props) => <MovieId {...props} />}
          />
          <Route path="/movies" exact component={Movies} />
          <Route path="/not-found" component={Notfound} />
          <Route path="/customer" component={Customer} />
          <Route path="/market" component={Market} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
