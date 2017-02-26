const serviceHandlers = require('../handlers/service')
const enterpriseh = require('../handlers/enterprises')
const partyh = require('../handlers/parties')
const liabilityh = require('../handlers/liabilities')

const routes = [
  {method: 'GET', path: '/initdb', handler: serviceHandlers.initDB},
  {method: 'GET', path: '/enterprises', handler: enterpriseh.getEnterpriseList},
  {method: 'GET', path: '/enterprises/{id}', handler: enterpriseh.getEnterprise},
  {method: 'POST', path: '/liabilities', handler: liabilityh.postLiability},
  {method: 'GET', path: '/liabilities', handler: liabilityh.getLiabilities},
  {method: 'POST', path: '/parties', handler: partyh.postParty},
  {method: 'GET', path: '/parties', handler: partyh.getParties},
  {method: 'DELETE', path: '/parties/{id}', handler: partyh.deleteParty}
]
const router = function (server) {
  routes.map((rt) => server.route(rt))
}

module.exports = router
