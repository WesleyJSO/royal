
exports.seed = knex => knex(`clients`)
  .del()
  .then(() => knex(`clients`).insert([
      { name: 'Wesley Silva', cgccpf: `12314312309`, phonenumber: 11987789987 },
      { name: 'José', cgccpf: `12312312319`, phonenumber: 11987789987 },
      { name: 'João Wesley Silva', cgccpf: `22312312309`, phonenumber: 11987789987 },
      { name: 'João Wesley Silva', cgccpf: `01234567891234`, phonenumber: 11987789987 },
    ])
  )
  // npx knex seed:make 001_clients
  // npx knex seed:run
