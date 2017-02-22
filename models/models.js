var Repo = require('../repository/repo.js')
var repo = new Repo()
var sequelize = repo.sequelize
var Sequelize = repo.Sequelize

const Party = sequelize.define('party', {
  name: {
    type: Sequelize.STRING,
    field: 'name'
  }
}, {underscored: true})

const Liability = sequelize.define('liability', {
  amount: {
    type: Sequelize.DECIMAL(12, 2),
    field: 'amount'
  }
}, {underscored: true})

Liability.belongsTo(Party)

module.exports.Party = Party
module.exports.Liability = Liability
