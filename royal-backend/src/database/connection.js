const configuration = require(`../../knexfile`)
const knex = require(`knex`)

const env = process.env.NODE_ENV === `test` 
  ? configuration.test 
  : configuration.development

const connection = knex(env)

module.exports = connection