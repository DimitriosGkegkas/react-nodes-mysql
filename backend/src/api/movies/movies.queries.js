const db = require("../../db");

const tableNames = require("../../constants/tableNames");

const fields = ["id", "title", "description"];

module.exports = {
  getAllMovies() {
    return db(tableNames.movie).select(fields);
  },
  async getMovie(title) {
    return db(tableNames.movie)
      .select(fields)
      .where("title", "like", `%${title}%`)
      .first();
  },
  async createMovie({ title, description }) {
    return db(tableNames.movie).insert({
      title,
      description,
    });
  },

  async deleteAllMovies() {
    return db(tableNames.movie).del();
  }
};
