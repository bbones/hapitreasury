const Repo = require('../repository/repo.js')
const repo = new Repo()
const sequelize = repo.sequelize
const models = require('../models/models')

const liabilityHandlers = {
  postLiability: (request, reply) => {
    console.log(request.payload.amount)
    console.log(request.payload.party_id)
    let party = models.Party.findById(request.payload.party_id)
    let unit = models.Party.findById(request.payload.unit_id)
    let liability = models.Liability.create({
      amount: request.payload.amount
    })
    debugger
    liability.setParty(party)
    liability.setUnit(unit)
    reply(liability)
  }
}

module.exports = liabilityHandlers//
