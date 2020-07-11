
exports.seed = knex => knex(`clients`)
  .del()
  .then(() => knex(`clients`).insert([
      { name: 'Wesley Silva', cpf: 123123123098, phonenumber: 11987789987 },
      { name: 'José', cpf: 123123123098, phonenumber: 11987789987 },
      { name: 'João Wesley Silva', cpf: 123123123098, phonenumber: 11987789987 },
    ])
  )
  // npx knex seed:make 001_clients
  // npx knex seed:run
