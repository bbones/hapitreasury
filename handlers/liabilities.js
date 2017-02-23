const Repo = require('../repository/repo.js')
const repo = new Repo()
const sequelize = repo.sequelize
const models = require('../models/models')

const liabilityHandlers = {
  getLiabilities: (request, reply) => {
    reply(models.Liability.findAll())
  },

  postLiability: (request, reply) => {
    console.log(request.payload.amount)
    console.log(request.payload.party_id)
    let liability = models.Liability.create({
      amount: request.payload.amount,
      party_id: request.payload.party_id,
      unit_id: request.payload.unit_id
    }, {include: [models.Liability.Party, models.Liability.Unit]})
    reply(liability)
  }
}

module.exports = liabilityHandlers//
