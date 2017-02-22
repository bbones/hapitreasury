const Repo = require('../repository/repo.js')
const repo = new Repo()
const sequelize = repo.sequelize
const models = require('../models/models')

const partyHandlers = {
  postParty: (request, reply) => {
    console.log(request.payload.name)
    reply(models.Party.create({name: request.payload.name}))
  }
}

module.exports = partyHandlers
