import http from "../http-common";

class MoviesDataService {
  getAll() {
    return http.get("/v1/movies");
  }

  get(id) {
    return http.get(`/v1/movies/${id}`);
  }

  create(data) {
    return http.post("/v1/movies", data);
  }

  update(id, data) {
    return http.put(`/v1/movies/${id}`, data);
  }

  delete(id) {
    return http.delete(`/v1/movies/${id}`);
  }

  deleteAll() {
    return http.delete(`/v1/movies`);
  }

  findByTitle(title) {
    return http.get(`/v1/movies?title=${title}`);
  }
}

export default new MoviesDataService();