const { table } = require("../connection")

exports.up = knex => knex.schema.createTable(`plans`, table => {
  table.increments(`id`)
  table.string(`description`).notNullable()
})

exports.down = knex => knex.schema.dropTable(`plans`)
