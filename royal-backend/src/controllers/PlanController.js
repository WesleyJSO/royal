const connection = require(`../database/connection`)

module.exports = {
  async get(reuqest, response) {
    try {
      const plans = await connection(`plans`).select([`id`, `description`])
      return response.json(plans)
    } catch(error) {
      console.log({ error })
    }
  },
}