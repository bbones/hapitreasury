const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://bbones:bb@localhost:5432/postgres')
const models = require('../models/models')

sequelize.sync().then(() => {
  // models.Liability.findAll({
  //   include:[{model: models.Party}]
  // }).then((data) => {
  //   data.map((d) => console.log(d.dataValues))
  // })
  console.log(models.Party.associations);
})
