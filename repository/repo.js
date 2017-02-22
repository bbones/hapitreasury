var Sequelize = require('sequelize')

let instance = null

class Repo {
  constructor () {
    if (!instance) {
      instance = this
      this.sequelize = new Sequelize('postgres://bbones:bb@localhost:5432/postgres')
      this.Sequelize = Sequelize
    }
    return instance
  }
}

module.exports = Repo
