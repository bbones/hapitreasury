const pgPool = require('../utility/pg-pool');
const Boom = require('boom');

const enterpriseHandlers = {
    getEnterpriseList : function (request, reply) {
        pgPool.connect(function(err, client, done) {
          if(err) {
            return console.error('error fetching client from pool', err);
          }
          client.query('SELECT * from treasury.enterprise', function(err, result) {
            //call `done()` to release the client back to the pool
            done();

            if(err) {
              reply(Boom.wrap(err));
              return console.error('error running query', err);
            }
            reply(result.rows);
            console.log(result.rows);
            //output: 1
          });
        });
    },
    getEnterprise : function (request, reply) {
        pgPool.connect(function(err, client, done) {
          if(err) {
            return console.error('error fetching client from pool', err);
          }
          client.query(
            'SELECT * from treasury.enterprise where enterprise_id=$1',
            [request.params.id],
            function(err, result) {
              //call `done()` to release the client back to the pool
              done();

              if(err) {
                reply(Boom.wrap(err));
                return console.error('error running query', err);
              }
              reply(result.rows[0]);
              //output: 1
            }
          );
        });
    }

};

module.exports = enterpriseHandlers;
