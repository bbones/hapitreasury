const Repo = require('../repository/repo.js')
const repo = new Repo()
const sequelize = repo.sequelize
const models = require('../models/models')

const JSONAPISerializer = require('jsonapi-serializer').Serializer

const PartySerializer = new JSONAPISerializer('parties',
  {attributes: ['name', 'created_at', 'updated_at']})

const partyHandlers = {
  postParty: (request, reply) => {
    console.log(request.payload.name)
    models.Party.create({name: request.payload.name}).then((party) => {
      reply(PartySerializer.serialize(party))
    })
  },
  getParties: (request, reply) => {
    console.log(request.query)
    if (request.query.q) {
      models.Party.findAll({where: {name: {$like: request.query.q + '%'}}})
        .then((data) => reply(PartySerializer.serialize(data)))
    } else {
      models.Party.findAll().then((data) => reply(PartySerializer.serialize(data)))
    }
  },
  deleteParty: (request, reply) => {
    models.Party.findById(request.params.id).then((party) => {
      party.destroy().then((data) => {
        console.log(data)
        reply(PartySerializer.serialize(party))
      })
    })
  }
}

module.exports = partyHandlers
