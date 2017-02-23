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

Liability.Party = Liability.belongsTo(Party, { as: 'party', constraints: true })
Liability.Unit = Liability.belongsTo(Party, { as: 'unit', constraints: true })

sequelize.sync({force: true}).then(() => {
  Promise.all([
    Party.create({name: 'ISD Corp'}),
    Party.create({name: 'AMK'})])
  .then((values) => {
    values.map((v) => console.log(v.dataValues))
    let liability = Liability.create({
      amount: 100,
      party_id: values[0].id,
      unit_id: values[1].id
    }, {include: [Liability.Party, Liability.Unit]})
  })
})
