import React, { useState } from "react";
import MoviesDataService from "../services/movies.service";

const AddMovie = () => {
  const initialMovieState = {
    id: null,
    title: "",
    description: "",
    published: false
  };

  const [movie, setMovie] = useState(initialMovieState);
  const [submitted, setSubmitted] = useState(false);

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setMovie({ ...movie, title: title });
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setMovie({ ...movie, description: description });
  };

  const saveMovie = () => {
    var data = {
      title: movie.title,
      description: movie.description
    };

    MoviesDataService.create(data)
      .then((response) => {
        setMovie({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newMovie = () => {
    setMovie(initialMovieState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newMovie}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={movie.title}
              onChange={onChangeTitle}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={movie.description}
              onChange={onChangeDescription}
              name="description"
            />
          </div>

          <button onClick={saveMovie} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMovie;
