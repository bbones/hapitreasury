'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
const enterpriseHandlers = require('./handlers/enterprises');

server.connection({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/enterprises',
    handler: enterpriseHandlers.getEnterpriseList
});

server.route({
    method: 'GET',
    path: '/enterprises/{id}',
    handler: enterpriseHandlers.getEnterprise
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
