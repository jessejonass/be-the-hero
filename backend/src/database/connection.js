const knex = require('knex');
const configuration = require('../../knexfile'); // configurações do bd

const connection = knex(configuration.development);

module.exports = connection;