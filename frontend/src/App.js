import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddMovie from "./components/add-movie.component";
import Movie from "./components/movies.component";
import moviesList from "./components/movies-list.component";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/movies"} className="navbar-brand">
          Patients
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/movies"} className="nav-link">
              Patients
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/add" component={AddMovie} />
          <Route path="/movies/:id" component={Movie} />
          <Route path={"*"} component={moviesList} />
        </Switch>
      </div>
    </div>
  );
}
