const Repo = require('../repository/repo.js')
const repo = new Repo()
const sequelize = repo.sequelize
const models = require('../models/models')

const serviceHandlers = {
  initDB: (request, reply) => {
    sequelize.sync({force: true}).then(() => reply('Well done!'))
  }
}

module.exports = serviceHandlers
