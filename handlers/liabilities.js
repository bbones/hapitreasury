const Repo = require('../repository/repo.js')
const models = require('../models/models')
const JSONAPISerializer = require('jsonapi-serializer').Serializer

const LiabilitySerializer = new JSONAPISerializer('liabilities',
  {attributes: ['amount']})

const liabilityHandlers = {
  getLiabilities: (request, reply) => {
    models.Liability.findAll({
      include: {
        model: models.Party,
        as: 'Party'
      }
    }).then((data) => reply(LiabilitySerializer.serialize(data)))
  },

  postLiability: (request, reply) => {
    console.log(request.payload.amount)
    console.log(request.payload.party_id)
    let liability = models.Liability.create({
      amount: request.payload.amount,
      party_id: request.payload.party_id,
      unit_id: request.payload.unit_id
    }, {include: [models.Liability.Party, models.Liability.Unit]})
    reply(LiabilitySerializer.serialize(liability))
  }
}

module.exports = liabilityHandlers//
