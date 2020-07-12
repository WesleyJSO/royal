const connection = require(`../database/connection`)

module.exports = {
  async get(request, response) {
    try {
      if(request.query.id) {
        const id = request.query.id
        const client =  await connection(`clients`)
          .where(`id`, id)
          .select(`*`)
        return response.json(client)
        
      } else if(request.query.cgccpf) {
        const cgccpf = request.query.cgccpf
        const client =  await connection(`clients`)
          .where(`cgccpf`, cgccpf)
          .select(`*`)
          console.log("dhasifdhsauhhDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
          console.log({client})
        return response.json(client)
        

      } else {
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
      }
    } catch(error) {
      console.log({error})
    }
  },
}