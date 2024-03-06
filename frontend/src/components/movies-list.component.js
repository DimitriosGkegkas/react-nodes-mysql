import React, { useState, useEffect } from "react";
import MoviesDataService from "../services/movies.service";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveMovies();
  }, []);

  const onChangeSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  useEffect(() => {
    searchByTitle();
  }, [searchTitle]);

  const retrieveMovies = () => {
    MoviesDataService.getAll()
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMovies();
    setCurrentMovies(null);
    setCurrentIndex(-1);
  };

  const setActiveMovies = (Movies, index) => {
    setCurrentMovies(Movies);
    setCurrentIndex(index);
  };

  const removeAllMovies = () => {
    MoviesDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const searchByTitle = () => {
    MoviesDataService.findByTitle(searchTitle)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
        </div>
      </div>
      <div className="col-md-6">
        <h4>Patients Present List</h4>

        <ul className="list-group">
          {movies &&
            movies.map((Movies, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMovies(Movies, index)}
                key={index}
              >
                {Movies["code_lit"]}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllMovies}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentMovies ? (
          <div>
            <h4>Patient</h4>
            <div>
              <label>
                <strong>référence_praticien:</strong>
              </label>{" "}
              {currentMovies["référence_praticien"]}
            </div>
            <div>
              <label>
                <strong>ensemble_hébergement:</strong>
              </label>{" "}
              {currentMovies["ensemble_hébergement"]}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {"Present"}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Movies...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
