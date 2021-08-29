import React from "react";
import NavBar from "./navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movie";
import Customer from "./routing/customer";
import Market from "./routing/market";
import Notfound from "./routing/not-found";
import Login from "./components/login";
import Register from "./components/register";
import NewTable from "./components/newTable";
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
            render={(props) => <NewTable {...props} />}
          />
          <Route path="/movies" component={Movies} />
          <Route path="/customer" component={Customer} />
          <Route path="/market" component={Market} />
          <Route path="/" exact component={Movies} />
          <Route path="/not-found" component={Notfound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
