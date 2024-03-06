const express = require("express");

const queries = require("./patients.queries");

const router = express.Router();

router.get("/", async (req, res) => {
  const patients = await queries.getAll();
  res.json(patients);
});


module.exports = router;
