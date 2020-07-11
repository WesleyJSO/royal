const { table } = require("../connection")

exports.up = knex => knex.schema.createTable(`clients`, table => {
  table.increments(`id`)
  table.string(`name`).notNullable()
  table.decimal(`cpf`, 11, 0)
  table.decimal(`phonenumber`, 11, 0)
  table.timestamp(`birthdate`).defaultTo(knex.fn.now())
  table.timestamp(`expiredate`).defaultTo(knex.fn.now())
  table.boolean(`status`)
})

exports.down = knex => knex.schema.dropTable(`clients`)
