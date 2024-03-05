const bcrypt = require('bcrypt');
const Knex = require('knex');

const tableNames = require('../../src/constants/tableNames');

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all(Object
    .keys(tableNames)
    .map((name) => knex(name).del()));

 // Genre Seed Movies
  const movies = [
    {title: "Titanic", description:"best movie"},
    {title: "Harry Potter", description:"best movie"},
    {title: "Charlie's Angels", description:"best movie"},
    {title: "Taxas Charm", description:"best movie"},
    {title: "Evil Dead", description:"best movie"},
  ]

 // Inserting genres 
 await knex(tableNames.movie)
 .insert(movies);
}

