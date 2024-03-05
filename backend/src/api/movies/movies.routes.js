const express = require("express");

const queries = require("./movies.queries");

const router = express.Router();

router.get("/", async (req, res) => {
  const { title } = req.query;
  if (title) {
    const movie = await queries.getMovie(title);
    if (movie) {
      res.json([movie]);
      return;
    }
  }
  const movies = await queries.getAllMovies();
  res.json(movies);
});

router.post("/", async (req, res) => {
  const movies = await queries.createMovie(req.body);
  res.json(movies);
});

router.delete("/", async (req, res) => {
  const result = await queries.deleteAllMovies();
  res.json(result);
});

module.exports = router;
