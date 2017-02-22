const serviceHandlers = require('../handlers/service')
const enterpriseHandlers = require('../handlers/enterprises')
const partyHandlers = require('../handlers/parties')
const liabilityHandlers = require('../handlers/liabilities')

var router = function (server) {
  server.route({
    method: 'GET',
    path: '/initdb',
    handler: serviceHandlers.initDB
  })

  server.route({
    method: 'GET',
    path: '/enterprises',
    handler: enterpriseHandlers.getEnterpriseList
  })

  server.route({
    method: 'GET',
    path: '/enterprises/{id}',
    handler: enterpriseHandlers.getEnterprise
  })

  server.route({
    method: 'POST',
    path: '/liabilities',
    handler: liabilityHandlers.postLiability
  })

  server.route({
    method: 'POST',
    path: '/parties',
    handler: partyHandlers.postParty
  })
}

module.exports = router
