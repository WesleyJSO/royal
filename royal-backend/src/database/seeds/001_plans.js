
exports.seed = knex => knex('plans')
  .del()
  .then(() => knex('plans').insert([
    {description: 'Plano 1'},
    {description: 'Plano 2'},
    {description: 'Plano 3'},
    {description: 'Plano 4'},
    {description: 'Plano 5'},
    {description: 'Plano 6'},
    {description: 'Plano 7'},
    {description: 'Plano 8'},
    {description: 'Plano 9'},
  ])
)
