const express = require('express');
const project = require('../constants/project');
const movies = require('./movies/movies.routes');


const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: project.message,
  });
});

router.use('/movies', movies);

module.exports = router;
