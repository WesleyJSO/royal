const connection = require(`../database/connection`)

module.exports = {
  async get(request, response) {
    try {
        const clients = await connection(`clients`)
        .select([
          `id`,
          `name`,
          `cgccpf`,
          `phonenumber`,
          `birthdate`,
          `expiredate`,
          `status`,
        ])
      return response.json(clients)
    } catch(error) {
      console.log(error)
    }
  },
  async getId(request, response) {
    try {
      const client = await connection(`clients`)
        .where(`id`, request.params.id)
        .select(`*`)
      return response.json(client)
    } catch(error) {
      console.log(error)
    }
  },
  async getCgccpf(request, response) {
    try {
      const client = await connection(`clients`)
        .where(`cgccpf`, request.params.cgccpf)
        .select(`*`)
      return response.json(client)
    } catch(error) {
      console.log(error)
    }
  }
}