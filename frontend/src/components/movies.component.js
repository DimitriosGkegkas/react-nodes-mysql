import React, { useState, useEffect } from "react";
import MoviesDataService from "../services/movies.service";

const Movie = (props) => {
  const initialMovieState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentMovie, setCurrentMovie] = useState(initialMovieState);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMovie(props.match.params.id);
  }, [props.match.params.id]);

  const onChangeTitle = (e) => {
    setCurrentMovie({ ...currentMovie, title: e.target.value });
  };

  const onChangeDescription = (e) => {
    setCurrentMovie({ ...currentMovie, description: e.target.value });
  };

  const getMovie = (id) => {
    MoviesDataService.get(id)
      .then((response) => {
        setCurrentMovie(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updatePublished = (status) => {
    var data = {
      id: currentMovie.id,
      title: currentMovie.title,
      description: currentMovie.description,
      published: status
    };

    MoviesDataService.update(currentMovie.id, data)
      .then((response) => {
        setCurrentMovie({ ...currentMovie, published: status });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateMovie = () => {
    MoviesDataService.update(currentMovie.id, currentMovie)
      .then((response) => {
        console.log(response.data);
        setMessage("The Movie was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteMovie = () => {
    MoviesDataService.delete(currentMovie.id)
      .then((response) => {
        console.log(response.data);
        props.history.push('/Movies');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentMovie ? (
        <div className="edit-form">
          <h4>Movie</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={currentMovie.title}
                onChange={onChangeTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentMovie.description}
                onChange={onChangeDescription}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentMovie.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentMovie.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button
            className="badge badge-danger mr-2"
            onClick={deleteMovie}
          >
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateMovie}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Movie...</p>
        </div>
      )}
    </div>
  );
};

export default Movie;
