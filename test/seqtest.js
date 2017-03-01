const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://bbones:bb@localhost:5432/postgres')
const models = require('../models/models.js')

sequelize.sync({force: true}).then(() => {
  Promise.all([
    models.Party.create({name: 'ISD Corp'}),
    models.Party.create({name: 'AMK'}),
    models.Party.create({name: 'DMK'}),
    models.Party.create({name: 'Huta'}),
    models.Party.create({name: 'Dunaferr'})
  ]).then((values) => {
    // values.map((v) => console.log(v.dataValues))
    models.Liability.create({
      amount: 100,
      party_id: values[0].id,
      unit_id: values[1].id
    }, {include: [models.Liability.Party, models.Liability.Unit]}).then(() => {
      models.Liability.findAll(
        {include: [
          models.Liability.Party,
          models.Liability.Unit
        ]}
      ).then((data) => {
        data.map((v) => {
          console.log(v.dataValues.party_id, v.dataValues.unit_id, v.dataValues.amount)
          console.log(v.dataValues.party.dataValues)
          console.log(v.dataValues.unit.dataValues)
          // v.party.dataValues.map((d) => console.log(d.dataValues))
        })
      })
    })
  })
})
