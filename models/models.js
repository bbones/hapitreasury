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

const Payments = sequelize.define('payment', {
  amount: {
    type: Sequelize.DECIMAL(12, 2),
    field: 'amount'
  }
}, {underscored: true})

Liability.Party = Liability.belongsTo(Party, { as: 'party', constraints: true })
Liability.Unit = Liability.belongsTo(Party, { as: 'unit', constraints: true })
Payments.Party = Payments.belongsTo(Party, { as: 'party', constraints: true })
Payments.Unit = Payments.belongsTo(Party, { as: 'unit', constraints: true })
Party.hasMany(Liability, {as: 'liabs', foreignKey: 'party_id'})
Party.hasMany(Liability, {as: 'unliab', foreignKey: 'unit_id'})

module.exports.Party = Party
module.exports.Liability = Liability
