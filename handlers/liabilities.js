const models = require('../models/models')
const JSONAPISerializer = require('jsonapi-serializer').Serializer

const LiabilitySerializer = new JSONAPISerializer('liabilities',
  {
    attributes: ['amount', 'party', 'unit'],
    party: {
      ref: function (liability, party) {
        return party.id
      },
      attributes: ['name']
    },
    unit: {
      ref: function (liability, unit) {
        return unit.id
      },
      attributes: ['name']
    }
  })

const liabilityHandlers = {
  getLiabilities: (request, reply) => {
    models.Liability.findAll({
      include: [models.Liability.Party, models.Liability.Unit]
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
