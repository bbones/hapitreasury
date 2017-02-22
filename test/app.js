const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://bbones:bb@localhost:5432/postgres')

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

Liability.belongsTo(Party, { as: 'party', constraints: true })
Liability.belongsTo(Party, { as: 'unit', constraints: true })

sequelize.sync({force: true}).then(() => {
  let party = Party.create({name: 'ISD Corp'})
  let unit = Party.create({name: 'AMK'})
  let liability = Liability.create({
    amount: 100
  })
  liability.setParty(party)
  liability.setUnit(unit)
})
