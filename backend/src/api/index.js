const express = require('express');
const project = require('../constants/project');
const patients = require('./patients/patients.routes');


const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: project.message,
  });
});

router.use('/patients', patients);

module.exports = router;
