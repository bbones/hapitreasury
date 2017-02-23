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

Liability.Party = Liability.belongsTo(Party, { as: 'party', constraints: true })
Liability.Unit = Liability.belongsTo(Party, { as: 'unit', constraints: true })

module.exports.Party = Party
module.exports.Liability = Liability
