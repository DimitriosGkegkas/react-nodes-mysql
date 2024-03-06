const db = require("../../db");

const tableNames = require("../../constants/tableNames");

const fields = ["code_lit", "référence_praticien", "ensemble_hébergement"];

module.exports = {
  getAll() {
    return db(tableNames.patients).select(fields).limit(10);
  },
};
