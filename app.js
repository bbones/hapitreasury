'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
const router = require('./router/router')

server.connection({ port: 3000, host: 'localhost' })

router(server)

server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
