const Knex = require("knex");

const tableNames = require("../../src/constants/tableNames");
const { addDefaultColumns, references } = require("../../src/lib/tableUtils");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.movie, (table) => {
    table.increments().notNullable();
    table.string("title").notNullable().unique();
    table.string("description");
    addDefaultColumns(table);
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [tableNames.movie]
      .reverse()
      .map((tableName) => knex.schema.dropTableIfExists(tableName))
  );
};
