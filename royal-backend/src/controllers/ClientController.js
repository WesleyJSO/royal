const connection = require(`../database/connection`)

module.exports = {
  async get(request, response) {
    const clients = await connection(`clients`)
      .select([
        `id`,
        `name`,
        `cpf`,
        `phonenumber`,
        `birthdate`,
        `expiredate`,
        `status`,
      ])
    return response.json(clients)
  },
}